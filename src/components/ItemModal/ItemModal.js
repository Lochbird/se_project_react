import "./ItemModal.css";
import closeButton from "../../images/close-button.svg";

const ItemModal = ({ selectedCard, onClose, handleDeleteItem }) => {
  return (
    <div>
      <div className={"modal"}>
        <div className="modal__content">
          <button
            className="modal__button-close"
            type="button"
            onClick={onClose}
          >
            <img src={closeButton} alt="close" />
          </button>
          <img src={selectedCard.imageUrl} className="modal__card-image" />
          <div className="modal__description">
            <div>
              <div>{selectedCard.name}</div>
              <div>Weather Type: {selectedCard.weather}</div>
            </div>
            <div>
              <button
                className="modal__description modal__button-delete"
                type="button"
                onClick={handleDeleteItem}
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
