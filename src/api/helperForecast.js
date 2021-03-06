/* eslint-disable no-restricted-syntax */
import Map from 'es6-map';
import { forecastWeather } from './OpenWeather';

const months = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const end = (map) => {
  const listObj = [];
  for (const date in map) {
    if (Object.prototype.hasOwnProperty.call(map, date)) {
      let minTemp = Number.MAX_VALUE;
      let maxTemp = -Number.MAX_VALUE;
      let temp = 0;
      let humidity = 0;
      let pressure = 0;
      const graphData = { hours: [], temp: [] };
      map[date].forEach((item) => {
        const hour = item.dt_txt.split(' ')[1];
        graphData.hours.push(hour);
        graphData.temp.push(item.main.temp);

        minTemp = Math.min(minTemp, item.main.temp_min);
        maxTemp = Math.max(maxTemp, item.main.temp_max);
        temp += item.main.temp;
        humidity += item.main.humidity;
        pressure += item.main.pressure;
      });
      const { icon } = map[date][0].weather[0];
      temp /= map[date].length;
      pressure /= map[date].length;
      humidity /= map[date].length;
      // Esto lo hago para poder extraer el dia
      const day = new Date(date);
      const ob = {
        day: months[day.getDay()],
        numberday: date,
        minTemp,
        maxTemp,
        temp,
        pressure,
        humidity,
        graphData,
        icon,
      };
      listObj.push(ob);
    }
  }
  return listObj;
};

const groupWeatherByDay = (list) => {
  // voy a retornar un mapa("fecha"-> [datos])
  const days = new Map();
  for (const key in list.list) {
    if (Object.prototype.hasOwnProperty.call(list.list, key)) {
      const w = list.list[key];
      // Obtengo la fecha del dato que estoy mirando
      const day = w.dt_txt.split(' ')[0];
      if (!days[day]) days[day] = [];
      days[day].push(w);
    }
  }
  return days;
};

const processUviForecast = (listObj) => {
  const ret = listObj.map((item) => {
    const { value } = item;
    const date = new Date(item.date_iso.split('T')[0]);
    const day = `${months[(date.getDay() + 6) % 7]} ${date.getDate()}`;
    return { day, value };
  });
  return ret;
};

const processDataForecast = (lat, long) => new Promise((resolve, reject) => {
  forecastWeather(lat, long)
    .then((result) => {
      const map = groupWeatherByDay(result);
      const listObj = end(map);
      resolve(listObj);
    })
    .catch((error) => {
      reject(error);
    });
});

export { processDataForecast, processUviForecast };
