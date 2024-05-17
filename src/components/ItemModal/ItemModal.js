import "./ItemModal.css";
import closeButton from "../../images/close-button.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, handleDeleteItem }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwned = selectedCard.owner === currentUser._id;
  console.log(selectedCard);

  const handleCardDelete = () => {
    console.log("delete card");
    handleDeleteItem(selectedCard._id);
  };

  return (
    <div>
      <div className={"modal"}>
        <div className="modal__content">
          <button
            className="modal__button-close"
            type="button"
            onClick={onClose}
          >
            <img src={closeButton} alt="Close Button" />
          </button>
          <img
            src={selectedCard.imageUrl}
            alt={selectedCard}
            className="modal__card-image"
          />
          <div className="modal__description">
            <div>
              <div>{selectedCard.name}</div>
              <div>Weather Type: {selectedCard.weather}</div>
            </div>
            {isOwned && (
              <button
                className="modal__description modal__button-delete"
                type="button"
                onClick={handleCardDelete}
              >
                Delete Item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
