import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="profile__header">
      <div>
        <img src={avatar} className="profile__avatar" alt="avatar" />
      </div>
      <div>
        <p className="profile__title">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
