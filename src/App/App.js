import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function App() {
  const weatherTemp = "85°F";
  const [activeModal, setActiveModal] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__section">
        <Header onCreateModal={handleCreateModal} />
        <Main weatherTemp={weatherTemp} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm onClose={handleCloseModal} title="New Garment">
            <label>
              Name
              <input type="text" name="name" minLength="1" maxLength="30" />
            </label>
            <label>
              Image
              <input type="url" name="link" />
            </label>
            <p>Select the weather type:</p>
            <div>
              <div>
                <input type="radio" name="weather" value="hot" id="hot" />
                <label>Hot</label>
              </div>
              <div>
                <input type="radio" name="weather" value="warm" id="warm" />
                <label>Warm</label>
              </div>
              <div>
                <input type="radio" name="weather" value="cold" id="cold" />
                <label>Cold</label>
              </div>
            </div>
          </ModalWithForm>
        )}
      </div>
    </div>
  );
}

export default App;
