import React, {useState} from "react";
import Snek from "./Snek";

const Farm = (props) => {
  const [state, setState] = useState(props.farm)
  const {name, micropythons, curlyboi_snektions} = state
  console.log("Data", state);
  const updateSneks = () => {
    setState(
        if (micropythons <= 10 ) {
          {...state, micropythons: state.micropythons += 1}
        } else  {
          {...state, micropythons: 0}
          {...state, curlyboi_snektions: state.curlyboi_snektions += 1} 
        }
      )
    console.log("New state: ", state)
  }
  let micropython_array = [];
  let curlyboi = null;
  for (var i = 0; i < micropythons; i++) {
    micropython_array.push(<Snek size={1} length={5} />)
  }

  if(state.curlyboi_snektions > 0) {
    curlyboi = <Snek size={3} length={curlyboi_snektions} />
  }

  return(
    <div>
      <div>
        <h1>Welcome to {name} farm</h1>
        <p>You have collected {micropythons} micropythons</p>
        <button onClick={updateSneks}>Moar sneks, please!</button>
      </div>
      <h2>Micropythons</h2>
      <div className="micropythons">
        { micropython_array }
      </div>
      <h2>Curlyboi</h2>
      { curlyboi }
    </div>
  )
}

export default Farm;
