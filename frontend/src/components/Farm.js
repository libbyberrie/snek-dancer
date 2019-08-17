import React, { useState, useEffect } from "react";
import Snek from "./Snek/";

const Farm = ({ farm }) => {
  const initialState = {
    micropythons: 0,
    curlyboi_snektions: 0,
    up: true
  }

  const [state, setState] = useState(initialState)
  const {name, micropythons, curlyboi_snektions, up} = state

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
    let uppy = state.up;
      if (micros < 10 ) {
        micros += 1;
        uppy = !uppy;
      } else  {
        micros = 0;
        boi += 1;
        uppy = !uppy;
      }
      setState(
        { ...state, micropythons: micros, curlyboi_snektions: boi, up: uppy }
      )
    console.log("New state: ", state)
  }


  const Micropythons = () => {
    let micropys = [];
    for (var i = 0; i < micropythons; i++) {
      micropys.push(<Snek key={i} size="medium" length={5} up={state.up}/>)
    }
    return(
      <div className="micropythons">
        {micropys}
      </div>
    )
  }

  const Curlyboi = () => (
    curlyboi_snektions > 0
    ? <Snek size="curlyboi" length={curlyboi_snektions} up={state.up}/>
    : null
  )

  return(
    <div>
      <header>
        <h1>Welcome to {name} Farm</h1>
        { curlyboi_snektions > 0 && <p>You have cultivated a curlyboi that is {curlyboi_snektions} units long. That's a solid effort!</p>}
      </header>
      <div className="farm">
        <section className="farm-section farm-buttons">
          <button onClick={updateSneks}>Moar sneks, please!</button>
        </section>

        <section className="farm-section farm-long-grass">
          <Micropythons/>
          <Curlyboi/>
        </section>

        <section className="farm-section farm-snek-board">
          <p>Micropythons: {micropythons}</p>
          <p>Curlyboi Length: {curlyboi_snektions}</p>
        </section>
      </div>
    </div>
  )
}

export default Farm;
