import { checkResponse } from "./utils";

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "079cde1922485f6357249370cacdeb60";

const getForecastInfo = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
  return weatherApi;
};

const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};

const parseLocation = (data) => {
  const location = data.name;
  return location;
};

export { getForecastInfo, parseWeatherData, parseLocation };
