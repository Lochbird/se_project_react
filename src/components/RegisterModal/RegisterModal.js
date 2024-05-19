import React, { useEffect, useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, handleRegister, login, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleEmailChange = (e) => {
    console.log("email: ", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("password: ", e.target.value);
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    console.log("name: ", e.target.value);
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    console.log("avatarUrl: ", e.target.value);
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name, avatarUrl);
    handleRegister({ email, password, name, avatarUrl });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatarUrl("");
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
          name="Email"
          minLength="2"
          maxLength="30"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Password*
        <input
          className="modal__input"
          type="password"
          name="Password"
          minLength="2"
          maxLength="30"
          required
          onChange={handlePasswordChange}
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
          onChange={handleNameChange}
        />
      </label>
      <label>
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="avatarUrl"
          required
          onChange={handleAvatarUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
