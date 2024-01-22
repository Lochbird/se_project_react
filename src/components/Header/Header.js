import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import "./Header.css";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__section">
        <div>
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">{currentDate}, New York</div>
      </div>
      <div className="header__section">
        <ToggleSwitch />
        <button
          type="button"
          onClick={onCreateModal}
          className="header__button_add-clothes"
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__title">
          Terrence Tegegne
        </Link>
        <div className="header__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
