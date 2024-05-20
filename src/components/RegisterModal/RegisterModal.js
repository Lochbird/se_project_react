import React, { useEffect, useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, handleRegister, login, isOpen }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "", name: "", avatarUrl: "" });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title={"Sign Up"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={"Sign Up"}
      name="signup"
      additionalActionText={"Log In"}
      handleAdditionalAction={login}
    >
      <label>
        Email*
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="2"
          maxLength="30"
          value={values.email}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Password*
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="2"
          maxLength="30"
          value={values.password}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          value={values.name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="avatarUrl"
          value={values.avatarUrl}
          required
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
