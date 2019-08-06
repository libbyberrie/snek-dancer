import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Snek from "./Snek";
const App = () => (
  <div>
    <DataProvider endpoint="api/farm"
                  render={data => <Table data={data} />} />
    <Snek size={1} length={4} />
  </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
