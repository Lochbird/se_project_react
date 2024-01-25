import React, { useMemo, useContext } from "react";
import "./Profile.css";
import avatar from "../images/avatar.svg";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import ItemCard from "../components/ItemCard/ItemCard";

function Profile({ weatherTemp, onSelectCard, clothingItems }) {
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
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <div className="profile">
      <div className="profile__header">
        <div>
          <img src={avatar} className="profile__avatar" alt="avatar" />
        </div>
        <div>
          <p className="profile__title">Terrence Tegegne</p>
        </div>
      </div>
      <section className="profile__cards card__section">
        <div className="card__header-profile">
          <div>
            <p>Your Items</p>
          </div>
          <div>
            <button className="card__button-add">+ Add new</button>
          </div>
        </div>
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard
              key={item.id || item._id}
              item={item}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
