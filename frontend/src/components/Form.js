import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    micropythons: 0,
    curlyboi_snektions: 0
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, micropythons, curlyboi_snektions } = this.state;
    const farm = { name, micropythons, curlyboi_snektions };
    const conf = {
      method: "post",
      body: JSON.stringify(farm),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };
  render() {
    const { name, micropythons, curlyboi_snektions } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Starting number of micropythons</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="micropythons"
                onChange={this.handleChange}
                value={micropythons}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">starting number of Snektions</label>
            <div className="control">
              <textarea
                className="textarea"
                type="number"
                name="curlyboi_snektions"
                onChange={this.handleChange}
                value={curlyboi_snektions}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Create farm!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
