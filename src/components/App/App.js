import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
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

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(currentTemperatureUnit);

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
            <Route exact path="/">
              <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
            </Route>
            <Route path="/profile">profile</Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <ModalWithForm
              onClose={handleCloseModal}
              title="New garment"
              buttonText="Add garment"
            >
              <label>
                Name
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  minLength="1"
                  maxLength="30"
                />
              </label>
              <label>
                Image
                <input
                  className="modal__input"
                  type="url"
                  name="link"
                  minLength="2"
                  required
                />
              </label>
              <p>Select the weather type:</p>
              <div>
                <div>
                  <input
                    className="modal__radio"
                    type="radio"
                    name="weather"
                    value="hot"
                    id="hot"
                  />
                  <label>Hot</label>
                </div>
                <div>
                  <input
                    className="modal__radio"
                    type="radio"
                    name="weather"
                    value="warm"
                    id="warm"
                  />
                  <label>Warm</label>
                </div>
                <div>
                  <input
                    className="modal__radio"
                    type="radio"
                    name="weather"
                    value="cold"
                    id="cold"
                  />
                  <label>Cold</label>
                </div>
              </div>
            </ModalWithForm>
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
