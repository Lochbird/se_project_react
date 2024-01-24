import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AddItemModal from "../../AddItemModal/AddItemModal";
import { getItems, addItem, deleteItem } from "../../Api/Api";

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
        setClothingItems([...clothingItems, res]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
    getItems()
      .then((res) => {
        setClothingItems(res);
        console.log(res);
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
              <Profile />
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
              isOpen={activeModal === "create"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
