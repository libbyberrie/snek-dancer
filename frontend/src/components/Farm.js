import React, {useState} from "react";

const Farm = (props) => {
  const [state, setState] = useState(props.farm) 
  const {micropythons, curlyboi_snektions} = state
  console.log("Data", state);
  const updateSneks = () => {
    setState(
        {...state, micropythons: state.micropythons += 1}
      )
    console.log("New state: ", state)
  }

  return <div>
            <h1>Welcome to {props.farm.name} farm</h1>
            <p>You have collected {micropythons} micropythons</p>
            <button onClick={updateSneks}>Moar sneks, please!</button>
          </div>
  
}

export default Farm;