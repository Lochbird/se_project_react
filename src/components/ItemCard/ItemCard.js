import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import like from "../../images/like.svg";

const ItemCard = ({ item, onSelectCard, handleCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  // figure out if item or item.likes is undefined, some is okay
  const isLiked = item.isLiked
    ? console.log(item.name, item.isLiked, "=== true")
    : console.log(item.name, item.isLiked, "=== false");
  // const isLiked = item.isLiked.some((name) => name === currentUser?._id);
  const id = item._id || item.id;

  const itemLikeButtonClassName = `card__like ${
    isLiked ? "card__like-active" : ""
  }`;

  const handleLike = () => {
    handleCardLike(id, isLiked);
  };

  return (
    <div>
      <div className="card__container">
        <div className="card__header">
          {item.name}
          <div className={itemLikeButtonClassName} onClick={handleLike}>
            <img src={like} />
          </div>
        </div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
