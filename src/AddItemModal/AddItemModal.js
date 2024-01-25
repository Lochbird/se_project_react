import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, handleAddItemsSubmit, isOpen }) => {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setURL] = useState("");
  const handleURLChange = (e) => {
    console.log(e.target.value);
    setURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemsSubmit({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      title="New garment"
      buttonText="Add garment"
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
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Image
        <input
          className="modal__input"
          type="url"
          name="link"
          minLength="2"
          value={imageUrl}
          onChange={handleURLChange}
          required
        />
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            className="modal__radio"
            type="radio"
            name="weather"
            value="hot"
            id="hot"
            onClick={() => setWeather("hot")}
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            className="modal__radio"
            type="radio"
            name="weather"
            value="warm"
            id="warm"
            onClick={() => setWeather("warm")}
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            className="modal__radio"
            type="radio"
            name="weather"
            value="cold"
            id="cold"
            onClick={() => setWeather("cold")}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
