import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weather = weatherOptions.find(
    (weatherOption) => weatherOption.day === day && weatherOption.type === type
  );

  const imageSrc = weather.URL || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrc} alt={type} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
