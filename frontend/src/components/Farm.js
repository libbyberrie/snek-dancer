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
  }, []);

  // Log out the ssssssssstate when it changes for devs
  useEffect(() => {
    console.log("Updated Ssssssssssstate:", state)
    }, [state]
  );

  // Call this when the button is clicked. Calculates new snek counts and
  // updates our state (and the `up`, for animation state)
  const updateSneks = () => {
    const lessThan10bois = micropythons < 10
    const micros = lessThan10bois ? (micropythons + 1) : 0;
    const snektions = lessThan10bois ? curlyboi_snektions : (curlyboi_snektions + 1);

    setState({
      ...state,
      micropythons: micros,
      curlyboi_snektions: snektions,
      up: !up
    });
  }

  // This needs to stay as an object within this component, for now.
  // Attempts to move it into it's own functional component were breaking animations :(
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

          {/* Render the lil' bois */}
          <div className="micropythons">
            {micropys}
          </div>

          {/* Render the biiiiiig curly boi */}
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
