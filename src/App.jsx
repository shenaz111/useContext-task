import React, { createContext } from "react";
import Api from "./Api.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Card from "./Components/Card";

const dataContext = createContext();

function App() {
  let data = Api.products[1];

  return (
    <div className="container">
      <div className="row ">
        <dataContext.Provider value={{ data }}>
          <Card />
        </dataContext.Provider>
      </div>
    </div>
  );
}

export { App as default, dataContext };