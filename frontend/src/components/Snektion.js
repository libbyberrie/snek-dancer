import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import SnekStart from "./SnekStart"
import SnekEnd from "./SnekEnd"
import SnekN from "./SnekN"
import SnekU from "./SnekU"

const Snektion = ({ position }) =>
// if position is 0, snekStart
// if position is -1, snekEnd
// if position is odd, snekN
// if position is even, snekU
  (
    <SnekStart />
  );

Snektion.propTypes = {
  position: PropTypes.number.isRequired
};

export default Snektion;
