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

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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

export { defaultClothingItems, weatherOptions };
