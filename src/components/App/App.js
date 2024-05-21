import React, { useEffect, useState } from "react";
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
import {
  getForecastInfo,
  parseWeatherData,
  parseLocation,
} from "../../utils/weatherApi";
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

  const [location, setLocation] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    email: "",
    _id: "",
  });

  const [loading, setIsLoading] = useState(false);

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
    const jwt = localStorage.getItem("jwt");
    setIsLoading(true);
    addItem({ values }, jwt)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const handleSubmit = (request) => {
  //   setIsLoading(true);
  //   request().then(handleCloseModal).catch(console.error).finally(() => {setIsLoading(false)});
  // };

  const handleLoginSubmit = ({ email, password }) => {
    setIsLoading(true);
    auth
      .login({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleCurrentUser();
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
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
        handleCloseModal();
      })
      .catch(console.error);
    return;
  };

  const handleRegisterSubmit = ({ name, avatarUrl, email, password }) => {
    setIsLoading(true);
    auth
      .signup({ name, avatar: avatarUrl, email, password })
      .then(() => {
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleProfileEdit = ({ name, avatar }, jwt) => {
    setIsLoading(true);
    updateUserData({ name, avatar }, jwt)
      .then(() => {
        setCurrentUser({ ...currentUser, name, avatar });
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardLike = (id, owner, isLiked) => {
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
          .catch(console.error)
      : removeLikeItem(id, owner, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === id ? updatedCard.item : card
              );
            });
          })
          .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    const jwt = localStorage.getItem("jwt");
    setIsLoading(true);
    deleteItem(id, jwt)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== id));
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  // function handleSubmit(request) {
  //   // start loading
  //   setIsLoading(true);
  //   request()
  //     // we need to close only in `then`
  //     .then(handleCloseModal)
  //     // we need to catch possible errors
  //     // console.error is used to handle errors if you don’t have any other ways for that
  //     .catch(console.error)
  //     // and in finally we need to stop loading
  //     .finally(() => setIsLoading(false));
  // }

  useEffect(() => {
    getForecastInfo()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const location = parseLocation(data);
        setTemp(temperature);
        setLocation(location);
      })
      .catch(console.error);
    getItems()
      .then((res) => {
        setClothingItems(res.reverse());
      })
      .catch(console.error);
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
        setCurrentUser(user);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickClose = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);
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
              location={location}
            />
            <Switch>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Profile
                  onCreateModal={handleCreateModal}
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectedCard}
                  isLoggedIn={isLoggedIn}
                  onLogOut={handleLogOut}
                  onCardLike={handleCardLike}
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
                loading={loading}
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
                isOpen={activeModal === "login"}
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
                loading={loading}
                isOpen={activeModal === "edit"}
              />
            )}
            {activeModal === "confirm" && (
              <ConfirmDeleteModal
                onClose={handleCloseModal}
                onSubmit={handleDeleteItem}
                selectedCard={selectedCard}
                loading={loading}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
