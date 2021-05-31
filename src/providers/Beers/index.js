import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const BeersContext = createContext([]);

export const BeersProvider = ({ children }) => {
  const [beers, setBeers] = useState([]);

  const loadBeers = () => {
    axios("https://api.punkapi.com/v2/beers")
      .then((res) => {
        console.log(res.data);
        setBeers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadBeers();
  }, []);

  return (
    <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
  );
};

export const useBeers = () => useContext(BeersContext);
