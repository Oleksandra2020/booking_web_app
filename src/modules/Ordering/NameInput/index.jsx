import React from "react";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation = () => {
    const { name } = this.state;
    let formIsValid = true;

    console.log(name);
    if (name === "") {
      formIsValid = false;
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
      }
    }
    return formIsValid;
  };

  handleSubmit(event) {
    event.preventDefault();

    if (!this.handleValidation()) {
      alert("Form has errors.");
    }
  }

  render() {
    const { name: propValue } = this.props;
    const { name: stateValue } = this.state;
    const { name } = this.isUpdatedByChange ? propValue : stateValue;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім я:
          <input
            type="name"
            required
            value={name}
            onChange={(e) => {
              this.state.name = e.target.value;
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NameInput;
