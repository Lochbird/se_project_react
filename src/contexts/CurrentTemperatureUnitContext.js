import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "F",
  setCurrentTemperatureUnit: () => {},
});

export { CurrentTemperatureUnitContext };
