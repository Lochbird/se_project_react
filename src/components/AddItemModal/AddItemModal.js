import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  handleCloseModal,
  handleAddItemsSubmit,
  isOpen,
  loading,
}) => {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setURL] = useState("");
  const handleURLChange = (e) => {
    setURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemsSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setURL("");
      setWeather("");
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
          <label>
            <input
              className="modal__radio"
              type="radio"
              name="weather"
              value="hot"
              id="hot"
              onClick={() => setWeather("hot")}
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
              onClick={() => setWeather("warm")}
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
              onClick={() => setWeather("cold")}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
