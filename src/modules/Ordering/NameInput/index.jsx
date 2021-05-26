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

  handleSubmit(event) {
    const { val } = this.state;
    alert(`A name was submitted: ${val}`);
    event.preventDefault();
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
