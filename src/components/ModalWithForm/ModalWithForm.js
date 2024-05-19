import "./ModalWithForm.css";
import closeButton from "../../images/close-button.svg";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  onSubmit,
  onClose,
  name,
  additionalActionText,
  handleAdditionalAction,
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
            <button
              type="button"
              className="modal__additional-action"
              onClick={handleAdditionalAction}
            >
              {additionalActionText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

// import { useEffect } from "react";

// export const Modal = ({ name, onClose, children }) => {
//   // here is `useEffect` for the `Escape` listener
//   useEffect(() => {
//     // we should define the handler inside `useEffect`, so that it wouldn’t lose the reference to be able to remove it
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);
//     // don’t forget to remove the listener in the `clean-up` function
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   // here is the overlay handler
//   const handleOverlay = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   // then we add the main wrapper with class `modal`
//   return (
//     <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
//       {/* the container for the contents */}
//       <div className="modal__container">
//         {/* here will be anything you add as `children`*/}
//         {children}
//         {/* add the close button */}
//         <button className="modal__close" type="button" onClick={onClose} />
//       </div>
//     </div>
//   );
// };
