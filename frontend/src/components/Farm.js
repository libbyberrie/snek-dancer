import React, { useState, useEffect } from "react";
import Snek from "./Snek/";

const Farm = ({ farm }) => {
  const initialState = {
    micropythons: 0,
    curlyboi_snektions: 0
  }

  const [state, setState] = useState(initialState)
  const {name, micropythons, curlyboi_snektions} = state

  useEffect(() => {
    farm ? setState(farm) : null
    }, []
  )

  // Log out the state when it changes
  useEffect(() => {
    console.log("Updated State:", state)
    }, [state]
  )

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
    micropython_array.push(<Snek size="micropython" length={5} />)
  }

  if(state.curlyboi_snektions > 0) {
    curlyboi = <Snek size="curlyboi" length={state.curlyboi_snektions} />
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
      <p>You have cultivated a curlyboi that is {curlyboi_snektions} units long. That's a solid effort!</p>
    </div>
  )
}

export default Farm;
