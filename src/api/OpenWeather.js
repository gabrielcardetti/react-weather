/* eslint-disable no-bitwise */
/* eslint-disable no-console */
const URL = 'https://api.openweathermap.org/data/2.5/';

const getWeather = apiUrl => new Promise((resolve, reject) => {
  const key = process.env.OPENWEATHER_API_KEY;
  const unit = 'metric';
  const url = `${apiUrl}&units=${unit}&appid=${key}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

const currentUvi = (lat, lon) => getWeather(`${URL}uvi?lat=${lat}&lon=${lon}`);

const forecastUvi = (lat, lon, cnt = 5) => getWeather(`${URL}uvi/forecast?cnt=${cnt}&lat=${lat}&lon=${lon}`);

const historyUvi = (lat, lon, cnt = 30) => {
  const date = new Date();
  const end = date.getTime() / 1000 | 0;
  const start = end - (cnt * 24 * 60 * 60);
  return getWeather(`${URL}uvi/history?start=${start}&end=${end}&lat=${lat}&lon=${lon}`);
};

const currentWeather = (lat, lon) => getWeather(`${URL}weather?lat=${lat}&lon=${lon}`);

const forecastWeather = (lat, lon) => getWeather(`${URL}forecast?lat=${lat}&lon=${lon}`);

export {
  currentWeather,
  forecastWeather,
  historyUvi,
  currentUvi,
  forecastUvi,
};
