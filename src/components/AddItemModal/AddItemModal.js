import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  handleCloseModal,
  handleAddItemsSubmit,
  isOpen,
  loading,
}) => {
  const [values, setValues] = useState({ name: "", imageUrl: "", weather: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemsSubmit(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      title="New garment"
      buttonText={loading ? "Saving..." : "Save"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="imageUrl"
          minLength="2"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <label>
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="hot"
              id="hot"
              onClick={handleChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label>
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="warm"
              id="warm"
              onClick={handleChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label>
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="cold"
              id="cold"
              onClick={handleChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
