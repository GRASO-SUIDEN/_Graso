import { useState } from "react";
import "./addproperties.css";

function AddProperties() {
  const [selectedProperty, setSelectedProperty] = useState("default");

  const handlePropertyChange = (event) => {
    setSelectedProperty(event.target.value);
  };

  return (
    <div className="add-properties-wrapper">
      <div className="add-properties">
        <div className="sub-head">
          <h1>Explore land</h1>
          <h3>
            Graso <span className="arrow"></span> {" > "} <span>Add properties</span>
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
                  <option value="default">Select Property</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="land">Land</option>
                </select>
              </span>

              <span>
                <h1>Price:</h1>
                <input type="text" placeholder="Price" />
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