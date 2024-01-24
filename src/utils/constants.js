import sunnyDay from "../images/day/sunny.svg";
import cloudyDay from "../images/day/cloudy.svg";
import rainDay from "../images/day/rain.svg";
import snowDay from "../images/day/snow.svg";
import stormDay from "../images/day/storm.svg";
import fogDay from "../images/day/fog.svg";
import sunnyNight from "../images/night/sunny.svg";
import cloudyNight from "../images/night/cloudy.svg";
import rainNight from "../images/night/rain.svg";
import snowNight from "../images/night/snow.svg";
import stormNight from "../images/night/storm.svg";
import fogNight from "../images/night/fog.svg";

const weatherOptions = [
  {
    URL: sunnyDay,
    day: true,
    type: "sunny",
  },
  {
    URL: cloudyDay,
    day: true,
    type: "cloudy",
  },
  {
    URL: rainDay,
    day: true,
    type: "rain",
  },
  {
    URL: snowDay,
    day: true,
    type: "snow",
  },
  {
    URL: stormDay,
    day: true,
    type: "storm",
  },
  {
    URL: fogDay,
    day: true,
    type: "fog",
  },
  {
    URL: sunnyNight,
    day: false,
    type: "sunny",
  },
  {
    URL: cloudyNight,
    day: false,
    type: "cloudy",
  },
  {
    URL: rainNight,
    day: false,
    type: "rain",
  },
  {
    URL: snowNight,
    day: false,
    type: "snow",
  },
  {
    URL: stormNight,
    day: false,
    type: "storm",
  },
  {
    URL: fogNight,
    day: false,
    type: "fog",
  },
];

export { weatherOptions };
