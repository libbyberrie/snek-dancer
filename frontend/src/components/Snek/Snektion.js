import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import SnekStart from "./SnekStart"
import SnekEnd from "./SnekEnd"
import SnekN from "./SnekN"
import SnekU from "./SnekU"

const Snektion = ({ position }) => {
  if(position == 0) {
    return(<SnekStart />);
  } else if(position == -1) {
    return(<SnekEnd />);
  } else if(position%2 == 1) {
    return(<SnekN />);
  } else {
    return(<SnekU />);
  }
}
Snektion.propTypes = {
  position: PropTypes.number.isRequired
};

export default Snektion;
