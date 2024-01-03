import './App.css';
import Header from '../Header/Header';
import WeatherCard from '../Weather/WeatherCard';

function App() {
  return (
      <div className='page'>
        <div className='page__section'>
          <Header />
            <main className='main'>
              <WeatherCard day={true} type='sunny' />
            <div>Today is [degrees here] / You should wear:</div>
            <div>Clothing Items</div>
            </main>
            <footer className='footer'>Developed by Xander Ambrosio</footer>
            <div className='modalWithForm'>modalWithForm Hidden</div>
          <div className='itemModal'>itemModal Hidden</div>
        </div>
      </div>
  );
}

export default App;
