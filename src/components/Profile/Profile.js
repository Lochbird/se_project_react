import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onCreateModal,
  onSelectCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
  onLogOut,
  handleEditProfileModal,
}) => {
  return (
    <div className="profile">
      <SideBar
        onLogOut={onLogOut}
        handleEditProfileModal={handleEditProfileModal}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
