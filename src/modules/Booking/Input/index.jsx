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

  return (
    <input
      id="origin_selector"
      className={styles.selector}
      type="text"
      placeholder="Оберіть місто"
    />
  );
};

CityInput.propTypes = {
  dest: PropTypes.string.isRequired,
};

export default CityInput;
