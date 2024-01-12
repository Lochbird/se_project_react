import "./ItemModal.css";
import closeButton from "../../images/close-button.svg";

const ItemModal = ({ selectedCard, onClose }) => {
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
          <img src={selectedCard.link} />
          <div>{selectedCard.name}</div>
          <div>Weather Type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
