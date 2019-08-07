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

  const Micropythons = () => {
    let micropys = [];
    for (var i = 0; i < micropythons; i++) {
      micropys.push(<Snek key={i} size="medium" length={5} />)
    }
    return(
      <div className="micropythons">
        {micropys}
      </div>
    )
  }

  const Curlyboi = () => (
    state.curlyboi_snektions > 0
    ? <Snek size="big" length={state.curlyboi_snektions} />
    : null
  )

  return(
    <div>
      <header>
        <h1>Welcome to {name} Farm</h1>
      </header>

      <div className="farm farm--flexContainer">
        <section className="farm farm--buttons">
          <button onClick={updateSneks}>Moar sneks, please!</button>
        </section>

        <section className="farm farm--longGrass">
          <Micropythons/>
          <Curlyboi/>
        </section>

        <section className="farm farm--snekBoard">
          <p>Micropythons: {micropythons}</p>
          <p>Curlyboi Length: {curlyboi_snektions}</p>
        </section>
      </div>
    </div>
  )
}

export default Farm;
