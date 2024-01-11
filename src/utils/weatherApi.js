const latitude = 44.34;
const longitude = 10.99;
const APIkey = "079cde1922485f6357249370cacdeb60";

const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then((data) => {
      return data;
    });
  return weatherApi;
};

const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export { getForecastWeather, parseWeatherData };
