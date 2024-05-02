import "./SideBar.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const { name, avatar } = useContext(CurrentUserContext);
  return (
    <div className="profile__header">
      <div className="profile">
        <div>
          <img src={avatar} className="profile__avatar" alt="avatar" />
        </div>
        <div>
          <p className="profile__title">{name}</p>
        </div>
      </div>
      <div className="sidebar-buttons">
        <button className="sidebar-button">Change profile data</button>
        <button className="sidebar-button">Log Out</button>
      </div>
    </div>
  );
};

export default SideBar;
