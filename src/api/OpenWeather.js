const url = 'https://api.openweathermap.org/data/2.5/';

const getWeather = (apiUrl) => {
  return new Promise( (resolve,reject) => {
    const key = process.env.OPENWEATHER_API_KEY;
    const unit = 'metric';
    const url = `${apiUrl}&units=${unit}&appid=${key}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        resolve(data)
      })
      .catch(error => {
        console.error(error)
        reject(error)
      });
    });
 }

 const currentWeather = (lat,lon) => {
   return getWeather(`${url}weather?lat=${lat}&lon=${lon}`);
 }
 const forecastWeather = (lat,lon) => {
  return getWeather(`${url}forecast?lat=${lat}&lon=${lon}`);
 }

 export { currentWeather, forecastWeather }
