import { useState } from "react";
import { Transaction } from "@mysten/sui/transactions";
import {  useCurrentAccount } from "@mysten/dapp-kit";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../../utils/networkConfig";
import "./addproperties.css";

function AddProperties() {
  const [selectedProperty, setSelectedProperty] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const handlePropertyChange = (event) => {
    setSelectedProperty(event.target.value);
  };

  const realEstateICOPackageId = useNetworkVariable("realEstateICOPackageId");
  
  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction({
    execute: async ({ bytes, signature }) =>
      await suiClient.executeTransactionBlock({
        transactionBlock: bytes,
        signature,
        options: {
          showRawEffects: true,
          showEffects: true,
        },
      }),
  });


  const addProperty = () => {
    // if(title === "" || selectedProperty === "" || price <= 0){
    //   return;
    // }
    const now = Date.now();
    const endDate = new Date('October 24, 2024 18:00:00');
const endMillis = endDate.getTime();
const isFractional = selectedProperty === 'land' ? false : true ;
    const tx = new Transaction();
/**
 *        title: String,
        image: String,
        property_type: String,
        total_value: u64,
        start_time: u64,
        end_time: u64,
        is_fractional: bool,
        description: String,
        location: String,
 */

    tx.moveCall({
      target: `${realEstateICOPackageId}::real_estate_ido::create_ido`,
      arguments: [tx.pure.string(title), tx.pure.string(""),tx.pure.string(selectedProperty), tx.pure.u64(price), tx.pure.u64(now), tx.pure.u64(endMillis), tx.pure.bool(isFractional), tx.pure.string("Sui on Campus"), tx.pure.string("Lagos")  ]
      
    })

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: async() => {
          await refetch();
        },
      }
    );
  }

  return (
    <div className="add-properties-wrapper">
      <div className="add-properties">
        <div className="sub-head">
          <h1>Explore land</h1>
          <h3>
            Graso <span className="arrow"></span> {" > "}{" "}
            <span>Add properties</span>
          </h3>
        </div>

        <div className="input-container">
          <div className="input-box input-box1">
            <h1>
              Upload your property image here, please click “Upload Image”
              Button.
            </h1>
            <input
              type="file"
              onChange={(e) => setTitle(e.target.value)}
              className="image-input"
              accept="image/png, image/jpeg"
              placeholder="Supports JPG, PNG, Max file size: 10MB"
            />
            <button>Save Changes</button>
          </div>

          <div className="input-box input-box2">
            <form action="">
              <span>
                <h1>Title:</h1>
                <input type="text" placeholder="Property Title:" />
              </span>

              <span>
                <h1>Select property:</h1>

                <select
                  value={selectedProperty}
                  onChange={handlePropertyChange}
                >
                  <option value="">Select Property</option>
                  <option value="land">Land</option>
                  <option value="landedProperty">Landed Property</option>
                </select>
              </span>

              <span>
                <h1>Price:</h1>
                <input type="text" onChange={(e) => {setPrice(Number(e.target.value))}} placeholder="Price" />
              </span>
              <button onClick={(e) => {e.preventDefault(); addProperty();}}>Add Property</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperties;
