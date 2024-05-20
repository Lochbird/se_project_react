import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { getCurrentUser } from "../../utils/Api";

const ClothesSection = ({
  onCreateModal,
  clothingItems,
  onSelectCard,
  isLoggedIn,
  onCardLike,
}) => {
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    getCurrentUser(jwt)
      .then((user) => {
        user = user._id;
        setOwner({ user });
      })
      .catch(console.error);
  }, []);

  return (
    <section className="profile__cards card__section">
      <div className="card__header-profile">
        <div>
          <p>Your Items</p>
        </div>
        <div>
          <button className="card__button-add" onClick={onCreateModal}>
            + Add new
          </button>
        </div>
      </div>
      <div className="cards__items">
        {clothingItems.map((item) =>
          owner.user === item.owner ? (
            <ItemCard
              key={item.id || item._id}
              item={item}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default ClothesSection;
