import { useState } from "react";
import "./addproperties.css";
import { useProperties } from "../../contexts/PropertyContext";

function AddProperties() {
  const { addProperty } = useProperties();
  const [description, setDescription] = useState("default");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
                  <option value="default">Select Property</option>
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
                  onChange={(e) => setPrice(e.target.value)}
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

              <button>Add Property</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperties;