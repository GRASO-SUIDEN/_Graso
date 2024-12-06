import { clientTransactions, GrasoQueries } from "./smart-contract/grasoContractIntegration";

const grasoQueries = new GrasoQueries();

export interface PropertyInfo {
    id?: string;
    title: string;
    description: string;
    image: string;
    propertyType: string;
    longitude: string;
    latitude: string;
    creator: string;
    price: number;
    currentAmount: number;
    deadline: number;
    isActive: boolean;
    isSuccessful: boolean;
}


export interface Contributor {
    address: string;
    amount: number;
    timestamp: number;
}


export const createProperty = async (
    title: string,
    description: string,
    propertyType: string,
    image: string,
    price: number,
    deadline: number,
    longitude: string,
    latitude: string,
) => {
    return clientTransactions.createProperty(title, description, propertyType, image, price, deadline, longitude, latitude);
}


export const getAllProperties = async () => {
    const properties = await grasoQueries.getAllProperties();
    return properties;
}

export const getProjectInfo = async (propertyId: string) => {
    return await grasoQueries.getPropertyInfo(propertyId);
}

export const contributeToCampaign = async (
    propertyId: string, 
    amount: number
) => {
    return clientTransactions.contribute(propertyId, amount);
}

export const getCampaignContributors = async (
    propertyId: string
) => {
    return await grasoQueries.getContributors(propertyId);
}

export const isContributor = async (
    propertyId: string, 
    address: string
): Promise<boolean> => {
    return await grasoQueries.isContributor(propertyId, address);
}

export const withdrawFunds = async (propertyId: string) => {
    return clientTransactions.withdraw(propertyId);
}

export const finalizeCrowdfund = async (propertyId: string) => {
    return clientTransactions.finalizePropertyCampaign(propertyId);
}

export const getPropertyDetailsWithContributors = async (
    propertyId: string
) => {
    const info = await grasoQueries.getPropertyInfo(propertyId);
    const contributors = await grasoQueries.getContributors(propertyId);

    if (info && contributors) {
        return {
            ...info,
            contributors
        };
    }

    return null;
}

export const checkCampaignStatus = async (propertyId: string) => {
    const wasFinalized = await grasoQueries.checkIfProjectCampaignEnded(propertyId);
    if (wasFinalized) {
        return await grasoQueries.getPropertyInfo(propertyId);
    }
    return null;
}

export const getCampaignProgress = async (propertyId: string) => {
    const info = await grasoQueries.getPropertyInfo(propertyId);
    
    if (info) {
        const progress = (Number(info.currentAmount) / Number(info.price)) * 100;
        return {
            currentAmount: info.currentAmount,
            price: info.price,
            progress: Math.min(progress, 100),
            isComplete: progress >= 100
        };
    }
    
    return null;
}
