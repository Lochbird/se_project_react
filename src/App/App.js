import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../footer/Footer";

function App() {
  const weatherTemp = "85°F";
  return (
    <div className="page">
      <div className="page__section">
        <Header />
        <Main weatherTemp={weatherTemp} />
        <Footer />
        <div className="modalWithForm">modalWithForm Hidden</div>
        <div className="itemModal">itemModal Hidden</div>
      </div>
    </div>
  );
}

export default App;
