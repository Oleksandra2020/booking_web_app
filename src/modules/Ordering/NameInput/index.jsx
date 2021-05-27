import React from "react";
import PropTypes from "prop-types";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleValidation = () => {
    const { val } = this.state;
    let formIsValid = true;

    if (!val) {
      formIsValid = false;
    }

    if (typeof val !== "undefined") {
      if (!val.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
      }
    }
    return formIsValid;
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  render() {
    const { value: propValue } = this.props;
    const { value: stateValue } = this.state;
    const value = this.isUpdatedByChange ? propValue : stateValue;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім я:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

NameInput.propTypes = {
  value: PropTypes.string.isRequired,
};

export default NameInput;
