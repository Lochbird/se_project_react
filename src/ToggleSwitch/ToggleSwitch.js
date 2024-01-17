import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({}) => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

  const handleToggle = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" onChange={handleToggle} />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
