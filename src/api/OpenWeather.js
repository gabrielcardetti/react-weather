const url = 'https://api.openweathermap.org/data/2.5/';

const getWeather = (apiUrl) => {
  return new Promise( (resolve,reject) => {
    const key = process.env.OPENWEATHER_API_KEY;
    const unit = 'metric';
    const url = `${apiUrl}&units=${unit}&appid=${key}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      });
    });
 }

  const currentUvi = (lat, lon) => {
    return getWeather(`${url}uvi?lat=${lat}&lon=${lon}`);
  }

  const forecastUvi = (lat, lon, cnt=5) => {
    return getWeather(`${url}uvi/forecast?cnt=${cnt}&lat=${lat}&lon=${lon}`);
  }
 
  const historyUvi = (lat, lon, cnt=30) => {
    const date = new Date();
    const end = date.getTime() / 1000 | 0;
    const start = end - (cnt * 24 * 60 * 60);
    return getWeather(`${url}uvi/history?start=${start}&end=${end}&lat=${lat}&lon=${lon}`);
  }

  const currentWeather = (lat,lon) => {
    return getWeather(`${url}weather?lat=${lat}&lon=${lon}`);
  }

  const forecastWeather = (lat,lon) => {
    return getWeather(`${url}forecast?lat=${lat}&lon=${lon}`);
  }

 export { currentWeather, 
          forecastWeather, 
          historyUvi,
          currentUvi,
          forecastUvi,
        }
