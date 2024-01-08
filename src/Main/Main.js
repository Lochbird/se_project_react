import WeatherCard from "../Weather/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../utils/constants";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card__section">
        <div className="card__header">
          Today is {weatherTemp} / You may want to wear:
        </div>
        <div className="card__items">
          {defaultClothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
