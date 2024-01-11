import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  buttonText = "Add garment",
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button className="modal__button-close" type="button" onClick={onClose}>
          <img
            src={require("../../images/close-button-new_garment.svg").default}
            alt="close"
          />
        </button>
        <h3 className="modal__header">{title}</h3>
        <form className="modal__form">
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
