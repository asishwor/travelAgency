import React, { createContext, useEffect, useState } from "react";

const ChangeCity = createContext();

const UseCity = ({ children }) => {
  const [places, setPlaces] = useState("nepal");
  const user = {
    name: "john",
  };

  useEffect(() => {
    searchDestinations();
  }, []);

  const searchDestinations = () => {
    setPlaces("chitwan");
  };
  return (
    <ChangeCity.Provider value={[places, setPlaces, searchDestinations]}>
      {children}
    </ChangeCity.Provider>
  );
};
export { ChangeCity, UseCity };
