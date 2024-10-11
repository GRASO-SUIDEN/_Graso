import { useState } from "react";
import { Transaction } from "@mysten/sui/transactions";
import {  useCurrentAccount } from "@mysten/dapp-kit";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { useNetworkVariable } from "../../utils/networkConfig"
import { useProperties } from "../../contexts/PropertyContext";
import "./addproperties.css";

function AddProperties() {
  const { addProperty } = useProperties();
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  

  const currentAccount = useCurrentAccount();
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

  const convertToUnixTimestamp = (dateString) => {
    return Math.floor(new Date(dateString).getTime() / 1000);
  };

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
    console.log("Start Date (Unix Timestamp):", convertToUnixTimestamp(date));
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setEndDate(date);
    console.log("End Date (Unix Timestamp):", convertToUnixTimestamp(date));
  };
  
  const createIdo = () => {
    let isFractional;
    if(file === "" || title === "" || price <= 0 || startDate === "" || endDate === "" || description === "" ){
      return;
    }

    if(description === "land"){
      isFractional = false;
    } else {
      isFractional = true;
    }

    const tx = new Transaction();
    
    tx.moveCall({
      target: `${realEstateICOPackageId}::real_estate_ido::create_ido`
,
      arguments: [
        tx.pure.address('0xc07806106468ad7e77577db4f8d0827a46ad1fd43632eb8231f431601620dde8'),
        tx.pure.address('0x8116b754b460db1c881bc9a98601a825a216d2ec07337ce27de3e23dc75a0a87'),
        tx.pure.string(title),
        tx.pure.string(file.name),
        tx.pure.string(description),
        tx.pure.u64(price),
        tx.pure.u64(convertToUnixTimestamp(startDate)),
        tx.pure.u64(convertToUnixTimestamp(endDate)),
        tx.pure.bool(isFractional),
        tx.pure.string(`a ${description} called ${title} valued at ${price}`),
        tx.pure.string(`on sui`),
      ]
    });

    tx.setGasBudget(20000000);

    signAndExecute(
      {
        transaction: tx,
      },
      {
        onSuccess: async() => {
          console.log("Profile updated");
        },
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!title || !description || !file || !price || !startDate || !endDate) return;
    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("price", price);
    // formData.append("file", file, file.name);
    // formData.append("startDate", startDate);
    // formData.append("endDate", endDate);

    // addProperty(formData);
    // setDescription("");
    // setFile("");
    // setTitle("");
    // setPrice("");
    // setStartDate("");
    // setEndDate("");
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
              className="image-input"
              accept="image/png, image/jpeg"
              placeholder="Supports JPG, PNG, Max file size: 10MB"
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
            <button onClick={handleSubmit}>Save Changes</button>
          </div>

          <div className="input-box input-box2">
            <form onSubmit={handleSubmit}>
              <span>
                <h1>Title:</h1>
                <input
                  type="text"
                  placeholder="Property Title:"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </span>

              <span>
                <h1>Select property:</h1>

                <select
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                  <option value="">Select Property</option>
                  <option value="land">Land</option>
                  <option value="landedProperty">Landed Property</option>
                </select>
              </span>

              <span>
                <h1>Price:</h1>
                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </span>

              <span>
                <h1>Start Date:</h1>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </span>

              <span>
                <h1>End Date:</h1>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </span>

              <button onClick={(e) => {e.preventDefault(); createIdo();}}>Add Property</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperties;