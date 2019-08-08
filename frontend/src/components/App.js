import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Farm from "./Farm";

const App = () => (
  <DataProvider
    endpoint="api/farm"
    render={data => <Farm farm={data[0]}/>}
  />
);

const root = document.getElementById("app");
root ? ReactDOM.render(<App />, root) : null;
