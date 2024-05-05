import React, { useMemo, useContext } from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Profile = ({
  onCreateModal,
  weatherTemp,
  onSelectCard,
  clothingItems,
  // isLoggedIn,
  onLogOut,
}) => {
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
      <SideBar onLogOut={onLogOut} />
      <ClothesSection
        onCreateModal={onCreateModal}
        filteredCards={filteredCards}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
