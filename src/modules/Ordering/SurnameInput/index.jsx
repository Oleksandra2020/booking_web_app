import React from "react";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

class SurnameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { surname: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation = () => {
    const { surname } = this.state;
    let formIsValid = true;

    console.log(surname);
    if (surname === "") {
      formIsValid = false;
    }

    if (typeof surname !== "undefined") {
      if (!surname.match(/^[a-zA-Z]+$/)) {
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
    const { surname: propValue } = this.props;
    const { surname: stateValue } = this.state;
    const { surname } = this.isUpdatedByChange ? propValue : stateValue;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Прізвище:
          <input
            type="surname"
            required
            value={surname}
            onChange={(e) => {
              this.state.surname = e.target.value;
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

SurnameInput.propTypes = {
  surname: PropTypes.string.isRequired,
};

export default SurnameInput;
