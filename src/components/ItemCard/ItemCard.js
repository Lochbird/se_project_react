import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__container">
        <div className="card__name">{item.name}</div>
        <img
          src={item.imageUrl}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
