import React from "react";
import PropTypes from "prop-types";

const SvgSnekStart = ({ up }) => {
  const nSnek = "M -20 50 C 20 50, 20 50, 20 40 C 10 -40, 90 -40, 80 40"
  const uSnek = "M -20 10 C 20 0, 20 30, 20 40 C 10 120, 90 120, 80 40"
  return(
    <div className="snektion snektion--start">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -50 160 180">
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
