import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export const EditProfileModal = ({ handleCloseModal, handleProfileEdit }) => {
  const [values, setValues] = useState({ name: "", avatar: "" });
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleProfileEdit(values, jwt);
    handleCloseModal();
  };

  return (
    <ModalWithForm
      title={"Change Profile Data"}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      buttonText={"Save Changes"}
      name="edit-profile"
    >
      <label>
        Name *
        <input
          className="modal__input"
          type="name"
          name="name"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Avatar *
        <input
          className="modal__input"
          type="url"
          name="avatar"
          minLength="1"
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};
