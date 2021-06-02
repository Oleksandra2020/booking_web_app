import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../_shared/_input_styles/styles.module.css";

const initCity = "";

const CityInput = ({ dest }) => {
  const [city, setCity] = useState(initCity);

  useEffect(() => {
    if (dest === "from" && city === "") {
      // some geolocation logic
      setCity("Kyiv");
    }
  });

  const handleChange = ({ target }) => {
    const { value } = target;
    if (dest === "from") {
      setCity(value);
    } else {
      setCity(value);
    }
    console.log(value);
  };

  return (
    <input
      className={styles.selector}
      type="text"
      placeholder="Оберіть місто"
      onChange={handleChange}
    />
  );
};

CityInput.propTypes = {
  dest: PropTypes.string.isRequired,
};

export default CityInput;
