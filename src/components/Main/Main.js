import "./Main.css";
import WeatherCard from "../Weather/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { React, useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 0;

  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else {
      return "cold";
    }
  }, [temp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={temp} />
      <section className="cards__section">
        <div className="cards__header">
          Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        </div>
        <div className="cards__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
