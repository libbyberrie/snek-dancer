import React from "react";
import Snek from "./Snek";

const Farm = (props) => {
  console.log("Data", props.farm);
  let micropython_array = [];
  let curlyboi = null;
  for (var i = 0; i < props.farm.micropythons; i++) {
    micropython_array.push(<Snek size={1} length={5} />)
  }

  if(props.farm.curlyboi_snektions > 0) {
    curlyboi = <Snek size={3} length={props.farm.curlyboi_snektions} />
  }

  return(
    <div>
      <h1>Welcome to {props.farm.name} farm</h1>
      <p>You have collected {micropythons} micropythons</p>
      <button onClick={updateSneks}>Moar sneks, please!</button>
      <h2>Micropythons</h2>
      { micropython_array }
      <h2>Curlyboi</h2>
      { curlyboi }
    </div>
  )
}

export default Farm;
