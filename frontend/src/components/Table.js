import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

const Table = ({ data }) =>
  !data.length ? (
    <p>There are no sneks in your farm. You should change that!</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table table--striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map((el, i) => <th key={i}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              {Object.entries(el).map((el, i) => <td key={i}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
