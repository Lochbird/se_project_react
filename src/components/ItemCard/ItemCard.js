import "./ItemCard.css";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import like from "../../images/like.svg";

const ItemCard = ({ item, onSelectCard, handleCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  // const [isLiked, setIsLiked] = useState(false);
  const isLiked = item.likes.some((name) => name === currentUser?._id);
  const id = item._id || item.id;

  const itemLikeButtonClassName = `card__like ${
    isLiked ? "card__like-active" : ""
  }`;

  // useEffect(() => {
  //   item.likes > 0 ? setIsLiked(true) : setIsLiked(false);
  // });

  const handleLike = () => {
    console.log(id, isLiked, "handleLike");
    handleCardLike(id, isLiked);
    // isLiked ? setIsLiked(false) : setIsLiked(true);
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
