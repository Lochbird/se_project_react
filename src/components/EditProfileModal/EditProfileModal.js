import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export const EditProfileModal = ({
  handleCloseModal,
  handleProfileEdit,
  loading,
  isOpen,
  currentUser,
}) => {
  const [values, setValues] = useState({ name: "", avatar: "" });
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleProfileEdit(values, jwt);
  };

  useEffect(() => {
    setValues({ name: currentUser.name, avatar: currentUser.avatar });
  }, [isOpen, currentUser.name, currentUser.avatar]);

  return (
    <ModalWithForm
      title={"Change Profile Data"}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      buttonText={loading ? "Saving..." : "Save Changes"}
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
          value={values.name}
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
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};
