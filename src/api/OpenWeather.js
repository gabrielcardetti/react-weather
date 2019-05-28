import Map from 'es6-map';

const url = 'https://api.openweathermap.org/data/2.5/';
const months = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
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

const groupWeatherByDay = list => {
  //Retorno un mapa("fecha"-> "datos")
  const days = new Map() 
  for(const key in list['list']){
    const w = list['list'][key]
    //Obtengo la fecha del dato que estoy mirando
    const day = w['dt_txt'].split(' ')[0]
    if( !days[day] ) days[day] = []
    days[day].push(w)
  }
  return days;
}
 const processDataForecast = (lat,long) => {
  return new Promise( (resolve,reject) => {
    forecastWeather(lat,long)
    .then(result => {
      const map = groupWeatherByDay(result)
      const listObj=[]
      for (const date in map){
        let minTemp=Number.MAX_VALUE
        let maxTemp=-Number.MAX_VALUE
        map[date].forEach((item)=>{
          //Busco la temperatura maxima y minima de cada dia
          minTemp= Math.min(minTemp,item['main']['temp_min'])
          maxTemp= Math.max(maxTemp,item['main']['temp_max'])
        })
        //Esto lo hago para poder extraer el dia
        const day = new Date(date)
        const ob = {
          day:months[day.getDay()], numberday: date,
          minTemp, maxTemp}
        listObj.push(ob)
      }
      resolve(listObj)
    })
    .catch(error => {
      reject(error)
    })
  })
 }
 export { currentWeather, forecastWeather, processDataForecast }
