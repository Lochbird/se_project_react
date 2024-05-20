import "./LoginModal.css";
import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  handleLogin,
  handleRegister,
  isOpen,
}) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  useEffect(() => {
    setValues({ email: "", password: "" });
  }, [isOpen]);

  return (
    <ModalWithForm
      title={"Log In"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Log In"}
      name="login"
      additionalActionText={"Sign Up"}
      handleAdditionalAction={handleRegister}
    >
      <label>
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
