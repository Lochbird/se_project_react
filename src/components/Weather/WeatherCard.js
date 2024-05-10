import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({
  day,
  type,
  weatherTemp = "",
  CurrentTemperatureUnit,
}) => {
  const weather = weatherOptions.find(
    (weatherOption) => weatherOption.day === day && weatherOption.type === type
  );

  const imageSrc = weather.URL || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}°{CurrentTemperatureUnit}
      </div>
      <img src={imageSrc} alt={type} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
