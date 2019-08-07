import React from "react";
import PropTypes from "prop-types";

const SvgSnekStart = ({ up }) => {
  const nSnek = "M -20 100 C -20 100, 20 100, 20 100 C 20 100, 80 100, 80 100"
  const uSnek = "M -40 10 C 20 0, 20 30, 20 40 C 10 120, 90 120, 80 40"
  return(
    <div className="snektion snektion--start">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -50 200 180">
     // viewBox="-20 -50 140 180"
    <style></style>
    <path
    stroke-width="40"
    stroke-linecap="round"
    stroke="#5b57a6"
    fill="transparent"
    class="snake-body"
    d={up ? uSnek : nSnek}/>
    </svg>
    </div>
  )
}

SvgSnekStart.propTypes = {
  up: PropTypes.bool.isRequired
};

export default SvgSnekStart;
