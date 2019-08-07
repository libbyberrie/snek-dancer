import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Snektion from "./Snektion";

const Snek = ({ size, length }) => {
  let snektion_array = [];
  for (var i = 0; i < length; i++) {
    snektion_array.push(<Snektion position={i} key={i} />)
  }
  return (
    <div className={"snek snek--" + size }>
    { snektion_array }
    </div>
  );
}

Snek.propTypes = {
  size: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default Snek;
