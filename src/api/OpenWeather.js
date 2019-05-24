
class OpenWather {
  GETWeather (city) {
    return new Promise( (resolve,reject) => {
      const key = 'f56c89511abe2b1ee423e47a55199c41'
      if(city === "") return
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',AR&appid=' + key
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          resolve(data)
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
      })
   }
 }

 export default new OpenWather()