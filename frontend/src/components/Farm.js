import React, { useState, useEffect } from "react";
import Snek from "./Snek";

const Farm = ({ farm }) => {
  const defaultValues = {
    micropythons: 0,
    curlyboi_snektions: 0
  }

  const [state, setState] = useState(defaultValues)
  const {name, micropythons, curlyboi_snektions} = state

  useEffect(() => {
    farm ? setState(farm) : null
    }, []
  )

  const handleSubmit = () {
    e.preventDefault();
    const farm = { state.name, state.micropythons, state.curlyboi_snektions };
    const conf = {
      method: "post",
      body: JSON.stringify(farm),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('/api/farm', conf).then(response => console.log(response));
  };

  const updateSneks = () => {
    let micros = state.micropythons;
    let boi = state.curlyboi_snektions;
      if (micros < 10 ) {
        micros += 1;
      } else  {
        micros = 0;
        boi += 1;
      }
      setState(
        { ...state, micropythons: micros, curlyboi_snektions: boi }
      )
  }

  let micropython_array = [];
  let curlyboi = null;
  for (var i = 0; i < micropythons; i++) {
    micropython_array.push(<Snek size={1} length={5} />)
  }

  if(state.curlyboi_snektions > 0) {
    curlyboi = <Snek size={3} length={state.curlyboi_snektions} />
  }

  return(
    <div>
      <div>
        <h1>Welcome to {name} farm</h1>
        <button onClick={handleSubmit}>Save your farm</button>
        <p>You have collected {micropythons} micropythons</p>
        <button onClick={updateSneks}>Moar sneks, please!</button>
      </div>
      <h2>Micropythons</h2>
      <div className="micropythons">
        { micropython_array }
      </div>
      <h2>Curlyboi</h2>
      { curlyboi }
      <p>You have cultivated a curlyboi that is {curlyboi_snektions} units long. That's a solid effort!</p>
    </div>
  )
}

export default Farm;
