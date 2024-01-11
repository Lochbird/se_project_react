import "./WeatherCard.css";

const weatherOptions = [
  {
    URL: require("../../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    URL: require("../../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    URL: require("../../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    URL: require("../../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    URL: require("../../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    URL: require("../../images/day/fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    URL: require("../../images/night/sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    URL: require("../../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    URL: require("../../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    URL: require("../../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    URL: require("../../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    URL: require("../../images/night/fog.svg").default,
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
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcURL} alt={type} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
