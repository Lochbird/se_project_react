import "./ConfirmDeleteModal.css";
import React from "react";
import closeButton from "../../images/close-button.svg";

export default function ConfirmDeleteModal({
  onClose,
  onSubmit,
  selectedCard,
  loading,
}) {
  const handleDeleteItem = (e) => {
    e.preventDefault();
    onSubmit(selectedCard._id);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content">
        <button className="modal__button-close" type="button" onClick={onClose}>
          <img src={closeButton} alt="Close Button" />
        </button>
        <p className="modal__paragraph">
          <span>Are you sure you want to delete this item?</span>
          <span>This action is irreversible.</span>
        </p>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button-confirm"
            type="button"
            onClick={handleDeleteItem}
          >
            {loading ? "Deleting..." : "Yes, delete item"}
          </button>
          <button
            className="modal__button modal__button-cancel"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
