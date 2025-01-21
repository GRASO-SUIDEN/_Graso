import { bcs, fromHex, toHex } from "@mysten/bcs";
import { Transaction } from "@mysten/sui/transactions";
import contractAddresses from "./packageid.json";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";

const { PACKAGE_ID, MANAGER_ID, TREASURY_CAP } = contractAddresses;

export const clientTransactions = {
    createProperty: (
        title: string,
        description: string,
        image: string,
        propertyType: string,
        price: number,
        deadline: number,
        longitude: string,
        latitude: string,
    ) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::create_property`,
            arguments: [
                transaction.object(MANAGER_ID),
                transaction.pure.string(title),
                transaction.pure.string(description),
                transaction.pure.string(propertyType),
                transaction.pure.string(image),
                transaction.pure.u64(price),
                transaction.pure.u64(deadline),
                transaction.pure.string(longitude),
                transaction.pure.string(latitude),
            ]
        });

        return transaction;
    },

    contribute: (propertyInfo: string, amount: number) => {
        const transaction = new Transaction();
        const [coin] = transaction.splitCoins(transaction.gas, [transaction.pure.u64(amount)]);
        transaction.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::contribute`,
            arguments: [transaction.object(propertyInfo), coin, transaction.object("0x6"), transaction.object(TREASURY_CAP)]
        });

        return transaction;
    },

    withdraw: (propertyId: string) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::withdraw`,
            arguments: [transaction.object(propertyId), transaction.object("0x6")]
        });

        return transaction;
    },

    finalizePropertyCampaign: (propertyId: string) => {
        const transaction = new Transaction();
        transaction.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::finalize_property_campaign`,
            arguments: [
                transaction.object(propertyId),
                transaction.object("0x6")
            ],
        })
    },



}


export class GrasoQueries {
    private keypair: Ed25519Keypair;
    private client: SuiClient;
    private Address: any;

    constructor() {
        const privateKey = import.meta.env.VITE_PRIVATE_KEY;
        if (!privateKey) {
            throw new Error("Please set your private key in a .env file");
        }
        
        this.keypair = Ed25519Keypair.fromSecretKey(decodeSuiPrivateKey(privateKey).secretKey);
        this.client = new SuiClient({ url: getFullnodeUrl("testnet") });
        this.Address = bcs.bytes(32).transform({
            input: (val: string) => fromHex(val),
            output: (val) => toHex(val),
        });
    }

    private async devInspectTransactionBlock(transaction: Transaction) {
        try {
            const result = await this.client.devInspectTransactionBlock({
                transactionBlock: transaction,
                sender: this.keypair.getPublicKey().toSuiAddress(),
            });
            return result.results ? result.results.map(result => result.returnValues) : null;
        } catch (error) {
            console.error("Error executing transaction:", error);
            return null;
        }
    }

    private async signAndExecuteTransaction(transaction: Transaction) {
        try {
            const result = await this.client.signAndExecuteTransaction({
                signer: this.keypair,
                transaction,
                options: {
                    showBalanceChanges: true,
                    showEvents: true,
                    showInput: false,
                    showEffects: true,
                    showObjectChanges: true,
                    showRawInput: false,
                }
            });
            return !!result.objectChanges;
        } catch (error) {
            console.error("Error executing transaction:", error);
            return false;
        }
    }

    async getPropertyInfo(propertyId: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::get_property_info`,
            arguments: [txn.object(propertyId)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        if (returnValues && returnValues[0]) {
            return {
                title: bcs.string().parse(Uint8Array.from(returnValues[0][0][0])),
                description: bcs.string().parse(Uint8Array.from(returnValues[0][1][0])),
                image: bcs.string().parse(Uint8Array.from(returnValues[0][2][0])),
                propertyType: bcs.string().parse(Uint8Array.from(returnValues[0][3][0])),
                longitude: bcs.string().parse(Uint8Array.from(returnValues[0][4][0])),
                latitude: bcs.string().parse(Uint8Array.from(returnValues[0][5][0])),
                creator: `0x${this.Address.parse(Uint8Array.from(returnValues[0][6][0]))}`,
                price: bcs.u64().parse(Uint8Array.from(returnValues[0][7][0])),
                currentAmount: Number(bcs.u64().parse(Uint8Array.from(returnValues[0][8][0]))) / 1000000000,
                deadline: bcs.u64().parse(Uint8Array.from(returnValues[0][9][0])),
                isActive: bcs.bool().parse(Uint8Array.from(returnValues[0][10][0])),
                isSuccessful: bcs.bool().parse(Uint8Array.from(returnValues[0][11][0])),
            };
        }
        return null;
    }

    async getContributors(propertyId: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::get_contributors`,
            arguments: [txn.object(propertyId)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);
        
        if (returnValues && returnValues[0]) {
            const Contributor = bcs.struct('Contributor', {
                address: this.Address,
                amount: bcs.u64(),
                timestamp: bcs.u64()
            });
            let contributors = bcs.vector(Contributor).parse(Uint8Array.from(returnValues[0][0][0]));
            return contributors.map(contributorObj => ({
                ...contributorObj,
                address: `0x${contributorObj.address}`
            }));
        }
        return null;
    }

    async getAllProperties(){
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::get_all_properties`,
            arguments: [txn.object(MANAGER_ID)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        if (returnValues && returnValues[0]) {
            const projectAddresses = bcs.vector(this.Address).parse(Uint8Array.from(returnValues[0][0][0]));
            const projects: any[] = [];
            for (const address of projectAddresses) {
                const projectInfo = await this.getPropertyInfo(`0x${address}`);
                if (projectInfo) {
                    projects.push({
                        id: `0x${address}`,
                        ...projectInfo
                    });
                }
            }
            return projects;
        }
        return [];
    }

    async isContributor(propertyId: string, address: string) {
        const txn = new Transaction();
        txn.moveCall({
            target: `${PACKAGE_ID}::real_estate_ido::is_contributor`,
            arguments: [txn.object(propertyId), txn.pure.address(address)],
        });
        const returnValues = await this.devInspectTransactionBlock(txn);

        return returnValues && returnValues[0] 
        ? bcs.bool().parse(Uint8Array.from(returnValues[0][0][0])) 
        : false;

    }

    async checkIfProjectCampaignEnded(propertyId: string){
        const projectInfo = await this.getPropertyInfo(propertyId);

        if(projectInfo && Number(projectInfo.deadline) * 1000 < Date.now() && projectInfo.isActive) {
            const txn = new Transaction();
            txn.moveCall({
                target: `${PACKAGE_ID}::real_estate_ido::finalize_property_campaign`,
                arguments: [
                    txn.object(propertyId),
                    txn.object("0x6")
                ],
            });
            return this.signAndExecuteTransaction(txn);
        }
        return false;
        }
    
}