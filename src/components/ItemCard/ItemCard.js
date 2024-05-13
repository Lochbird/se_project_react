import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import like from "../../images/like.svg";
import liked from "../../images/liked.svg";

const ItemCard = ({ item, onSelectCard, handleCardLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((name) => name === currentUser?._id);
  const id = item._id || item.id;

  const itemLikeButtonClassName = `card__like ${
    !isLoggedIn ? "card__like-hidden" : ""
  }`;

  const itemLikeButtonSrc = isLiked ? liked : like;

  const handleLike = () => {
    console.log("id: ", id, "isLiked: ", isLiked);
    handleCardLike(id, isLiked);
  };

  return (
    <div>
      <div className="card__container">
        <div className="card__header">
          {item.name}
          <div className={itemLikeButtonClassName} onClick={handleLike}>
            <img src={itemLikeButtonSrc} alt="Like Button" />
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
