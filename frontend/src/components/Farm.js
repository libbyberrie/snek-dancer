import React, { useState, useEffect } from "react";
import Snek from "./Snek/";

const Farm = ({ farm }) => {
  const initialState = {
    name: null,
    micropythons: 0,
    curlyboi_snektions: 0,
    up: true
  }

  const [state, setState] = useState(initialState)
  const {name, micropythons, curlyboi_snektions, up} = state

  // Call 'setState' only on initial component mount,
  // with the passed in 'farm', if it exists
  useEffect(() => {
    farm ? setState(farm) : null
  }, [])

  // Log out the state when it changes
  useEffect(() => {
    console.log("Updated State:", state)
    }, [state]
  )

  const updateSneks = () => {
    let micros = micropythons;
    let boi = curlyboi_snektions;
    let uppy = up;

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
  }

  const micropys = (
    [...Array(micropythons)].map((_, i) =>
      (<Snek key={i} size="medium" length={5} up={i%2===0 ? up : !up}/>))
  );

  return(
    <div>
      <header>
        <h1>Welcome to {name} Farm</h1>
      </header>
      <div className="farm">
        <section className="farm-section farm-buttons">
          <button className="btn-large" onClick={updateSneks}><h2>Moar sneks, please!</h2></button>
        </section>

        <section className="farm-section farm-long-grass">

          <div className="micropythons">
            {micropys}
          </div>

          {curlyboi_snektions > 0 &&
            <div className="the-curlyboi">
              {<Snek size="curlyboi" length={curlyboi_snektions} up={up}/>}
            </div>
          }
        </section>

        <section className="farm-section farm-snek-board">
          <p>Micropythons: {micropythons}</p>
          <p>Curlyboi Length: {curlyboi_snektions}</p>
          { curlyboi_snektions > 0 && <p>You have cultivated a curlyboi that is {curlyboi_snektions} snektions long. That's a solid effort!</p>}
        </section>
      </div>
    </div>
  )
}

export default Farm;
