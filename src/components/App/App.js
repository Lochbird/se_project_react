import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addItem, deleteItem } from "../../utils/Api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    addItem(values)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__section">
          <Header onCreateModal={handleCreateModal} />
          <Switch>
            <Route path="/profile">
              <Profile
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
              />
            </Route>
            <Route path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              onAddItem={onAddItem}
              handleAddItemsSubmit={onAddItem}
              isOpen={activeModal === "create"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              handleDeleteItem={() => handleDeleteItem(selectedCard._id)}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
