import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Snek from "./Snek";
import Farm from "./Farm";
const App = () => (
	<DataProvider
	  endpoint="api/farm"
    render={data => <Farm farm={data[0]}/>}
	/>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
