import "./ItemModal.css";
import closeButton from "../../images/close-button.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({
  selectedCard,
  onClose,
  handleDeleteItem,
  handleConfirmModal,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwned = selectedCard.owner === currentUser._id;
  console.log(selectedCard);

  const handleCardDelete = () => {
    handleConfirmModal();
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
            alt={selectedCard.name}
            className="modal__card-image"
          />
          <div className="modal__description">
            <div className="modal__card-info">
              <div>{selectedCard.name}</div>
              <div>Weather Type: {selectedCard.weather}</div>
            </div>
            {isOwned && (
              <button
                className="modal__button-delete"
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
