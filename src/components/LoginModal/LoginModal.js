import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, handleLogin, register }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    // onLogin(data);
    handleLogin();
  };

  return (
    <ModalWithForm
      title={"Log In"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Log In"}
      name="login"
      register={register}
    >
      <label>
        Email
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
        Password
        <input
          className="modal__input"
          type="password"
          name="Password"
          minLength="1"
          maxLength="30"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
