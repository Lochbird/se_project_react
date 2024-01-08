import WeatherCard from "../Weather/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../utils/constants";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card__section">
        <div className="card__header">
          Today is {weatherTemp}°F / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
