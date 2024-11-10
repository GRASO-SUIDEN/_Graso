import { createContext, useContext, useEffect, useState } from "react";

const PropertiesContext = createContext();
const BASE_URL = "https://web-production-6417.up.railway.app";

function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState();

  useEffect(function () {
    async function getProperties() {
      try {
        const res = await fetch(`${BASE_URL}/properties`);
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProperties();
  }, []);

  async function addProperty(property) {
    try {
      const res = await fetch(`${BASE_URL}/property`, {
        mode: "no-cors",
        method: "POST",
        body: property,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        addProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

function useProperties() {
  const context = useContext(PropertiesContext);
  if (context === undefined)
    throw new Error("You cannot use this context outside the Provider");
  return context;
}

export { PropertiesProvider, useProperties };
