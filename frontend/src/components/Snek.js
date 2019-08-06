import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import Snektion from "./Snektion";

const Snek = ({ size, length }) =>
  (
    <div className="snek snek--{size}">
      <Snektion position={0} />
    </div>
  );

Snek.propTypes = {
  size: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

export default Snek;
