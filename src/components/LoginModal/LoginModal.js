import "./LoginModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, handleLogin, handleRegister }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
    setValues({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return (
    <ModalWithForm
      title={"Log In"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Log In"}
      name="login"
      handleRegister={handleRegister}
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
