import "./WeatherCard.css";

const weatherOptions = [
  {
    URL: require("../Images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    URL: require("../Images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    URL: require("../Images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    URL: require("../Images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    URL: require("../Images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    URL: require("../Images/day/fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    URL: require("../Images/night/sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    URL: require("../Images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    URL: require("../Images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    URL: require("../Images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    URL: require("../Images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    URL: require("../Images/night/fog.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcURL = imageSrc[0].URL || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcURL} alt={type} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
