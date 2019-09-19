import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import SnekStart from "./SnekStart"
import SnekEnd from "./SnekEnd"
import SnekN from "./SnekN"
import SnekU from "./SnekU"

const Snektion = ({ position, up }) => {
  if(position == 0) {
    return(<SnekStart up={up} />);
  } else if(position == -1) {
    return(<SnekEnd up={up} />);
  } else if(position%2 == 1) {
    return(<SnekN up={up} />);
  } else {
    return(<SnekU up={up} />);
  }
}
Snektion.propTypes = {
  position: PropTypes.number.isRequired,
  up: PropTypes.bool.isRequired
};

export default Snektion;
