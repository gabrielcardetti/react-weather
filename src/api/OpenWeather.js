const getWeather = (lat, lon) => {
  return new Promise( (resolve,reject) => {
    const key = 'f56c89511abe2b1ee423e47a55199c41';
    const unit = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=lat${lat}&lon${lon}&unit=${unit}&appid=${key}`;
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

 export { getWeather }
