import React, { useEffect, useState } from "react";
import { Routes } from "./routes";
import { MainContext } from "./api/context/contextApi";
import axios from "axios";

const App = () => {
  
  const [name, setName] = useState("Ramzi");
  const [surname, setSurname] = useState("Mammadli");
  const [db, setDb] = useState([]);
  const [ab, setAb] = useState("Sitare");

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/suppliers/")
      .then((response) => {
        setDb(response.data);
      });
  }, []);

  const data = {
    name,
    surname,
    db,
    ab,
    setAb,
  };

  return (
    <MainContext.Provider value={data}>
      <div>
        <Routes />
      </div>
    </MainContext.Provider>
  );
};

export default App;
