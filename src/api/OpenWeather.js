const getWeather = (apiUrl) => {
  return new Promise( (resolve,reject) => {
    const key = process.env.OPENWEATHER_API_KEY
    const unit = 'metric';
    const url = `${apiUrl}&unit=${unit}&appid=${key}`
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

 const CurrentWeather = (lat,lon) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=lat${lat}&lon${lon}`
   return getWeather(url)
 }
 const ForecastWeather = (lat,lon) => {
  const url = `api.openweathermap.org/data/2.5/forecast/hourly?lat${lat}&lon${lon}`
  return getWeather(url)
 }
 export { CurrentWeather, ForecastWeather }
