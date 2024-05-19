import logo from "../../images/logo.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({
  onCreateModal,
  onLoginModal,
  onRegisterModal,
  isLoggedIn,
  location,
}) => {
  const { name, avatar } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__section">
        <div>
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__section">
        <ToggleSwitch />
        {!isLoggedIn && (
          <div className="header__section">
            <button
              className="header__button"
              type="button"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>
            <button
              className="header__button"
              type="button"
              onClick={onLoginModal}
            >
              Log In
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div className="header__section">
            <button
              type="button"
              onClick={onCreateModal}
              className="header__button"
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__title">
              {name}
            </Link>
            <div className="header__avatar">
              <img
                src={avatar}
                alt="avatar"
                className="header__profile-picture"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
