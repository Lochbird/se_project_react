import "./ModalWithForm.css";
import closeButton from "../../images/close-button.svg";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  // isOpen,
  onSubmit,
  onClose,
  name,
  login,
  handleRegister,
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
          <div className="modal__form-buttons">
            <button type="submit" className="modal__button">
              {buttonText}
            </button>
            {name === "login" && (
              <button
                type="button"
                className="modal__button-signup"
                onClick={handleRegister}
              >
                or Sign Up
              </button>
            )}
            {name === "signup" && (
              <button
                type="button"
                className="modal__button-login"
                onClick={login}
              >
                or Log In
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
