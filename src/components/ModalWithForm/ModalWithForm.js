import "./ModalWithForm.css";
import closeButton from "../../images/close-button.svg";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  isOpen,
  onSubmit,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close" />
        </button>
        <h3 className="modal__header">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
