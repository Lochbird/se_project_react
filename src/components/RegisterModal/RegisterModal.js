import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, handleSubmit, login }) => {
  return (
    <ModalWithForm
      title={"Sign Up"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Sign Up"}
      name="signup"
      login={login}
    >
      <label>
        Email*
        <input
          className="modal__input"
          type="email"
          name="Email"
          minLength="1"
          maxLength="30"
          required
        />
      </label>
      <label>
        Password*
        <input
          className="modal__input"
          type="password"
          name="Password"
          minLength="1"
          maxLength="30"
          required
        />
      </label>
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="Name"
          minLength="2"
          maxLength="30"
          required
        />
      </label>
      <label>
        Avatar URL
        <input className="modal__input" type="url" name="avatarUrl" required />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
