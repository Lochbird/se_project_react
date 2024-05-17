import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { signup, login, checkToken } from "../../utils/auth";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import React, { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  getItems,
  addItem,
  deleteItem,
  addLikeItem,
  removeLikeItem,
  updateUserData,
  getCurrentUser,
} from "../../utils/Api";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

const auth = { signup, login, checkToken };

function App() {
  const [activeModal, setActiveModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const [clothingItems, setClothingItems] = useState([]);

  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    email: "",
    _id: "",
  });

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleConfirmItemModal = () => {
    setActiveModal("confirm");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    console.log(values);
    const jwt = localStorage.getItem("jwt");
    addItem({ values }, jwt)
      .then((res) => {
        console.log(res);
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogin = () => {
    console.log("login");
    setIsLoggedIn(true);
    handleCurrentUser();
    handleCloseModal();
  };

  const handleLoginSubmit = ({ email, password }) => {
    auth
      .login({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLogin();
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", avatar: "", email: "", _id: "" });
  };

  const handleCurrentUser = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    getCurrentUser(jwt)
      .then(({ name, avatar, email, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, _id });
      })
      .catch((err) => {
        console.error(err);
      });
    return;
  };

  const handleRegisterSubmit = ({ name, avatarUrl, email, password }) => {
    auth.signup({ name, avatar: avatarUrl, email, password }).then((data) => {
      console.log(data);
      handleCloseModal();
    });
  };

  const handleProfileEdit = ({ name, avatar }, jwt) => {
    setCurrentUser({ ...currentUser, name, avatar });
    updateUserData({ name, avatar }, jwt)
      .then((data) => {
        console.log(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardLike = (id, owner, isLiked) => {
    console.log(clothingItems);
    const jwt = localStorage.getItem("jwt");
    !isLiked
      ? addLikeItem(id, owner, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === id ? updatedCard.item : card
              );
            });
          })
          .catch((err) => {
            console.error(err);
          })
      : removeLikeItem(id, owner, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === id ? updatedCard.item : card
              );
            });
          })
          .catch((err) => {
            console.error(err);
          });
  };

  const handleDeleteItem = (id) => {
    console.log(id);
    const jwt = localStorage.getItem("jwt");
    deleteItem(id, jwt)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== id));
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
    getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    auth
      .checkToken(jwt)
      .then((user) => {
        setIsLoggedIn(true);
        handleCurrentUser(user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__section">
            <Header
              onCreateModal={handleCreateModal}
              onLoginModal={handleLoginModal}
              onRegisterModal={handleRegisterModal}
              isLoggedIn={isLoggedIn}
            />
            <Switch>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Profile
                  onCreateModal={handleCreateModal}
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectedCard}
                  isLoggedIn={isLoggedIn}
                  onLogOut={handleLogOut}
                  handleCardLike={handleCardLike}
                  updateUserData={updateUserData}
                  handleEditProfileModal={() => setActiveModal("edit")}
                />
              </ProtectedRoute>
              <Route path="/">
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onCardLike={handleCardLike}
                  onDislikeItem={removeLikeItem}
                  isLoggedIn={isLoggedIn}
                />
              </Route>
            </Switch>
            <Footer />
            {activeModal === "create" && (
              <AddItemModal
                handleCloseModal={handleCloseModal}
                onAddItem={onAddItem}
                handleAddItemsSubmit={onAddItem}
              />
            )}
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                handleDeleteItem={handleDeleteItem}
                handleConfirmModal={handleConfirmItemModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                handleCloseModal={handleCloseModal}
                handleLogin={handleLoginSubmit}
                handleRegister={handleRegisterModal}
              />
            )}
            {activeModal === "register" && (
              <RegisterModal
                handleCloseModal={handleCloseModal}
                handleRegister={handleRegisterSubmit}
                login={handleLoginModal}
                isOpen={activeModal === "register"}
              />
            )}
            {activeModal === "edit" && (
              <EditProfileModal
                handleCloseModal={handleCloseModal}
                handleProfileEdit={handleProfileEdit}
              />
            )}
            {activeModal === "confirm" && (
              <ConfirmDeleteModal
                onClose={handleCloseModal}
                onSubmit={handleDeleteItem}
                selectedCard={selectedCard}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
