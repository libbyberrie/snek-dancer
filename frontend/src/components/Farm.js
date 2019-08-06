import React from "react";

const Farm = (props) => {
  console.log("Data", props.farm);

  return <h1>Welcome to {props.farm.name} farm</h1>
}

export default Farm;