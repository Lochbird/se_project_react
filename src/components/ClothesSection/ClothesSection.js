import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  onCreateModal,
  filteredCards,
  onSelectCard,
  isLoggedIn,
  onCardLike,
}) => {
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
      <div className="card__items">
        {filteredCards.map((item) => (
          <ItemCard
            key={item.id || item._id}
            item={item}
            onSelectCard={onSelectCard}
            isLoggedIn={isLoggedIn}
            onCardLike={onCardLike}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
