import Map from 'es6-map';
import {forecastWeather} from './OpenWeather'
const months = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

const end = map => {
  const listObj=[]
  for (const date in map){
    let minTemp = Number.MAX_VALUE
    let maxTemp = -Number.MAX_VALUE
    let temp = 0
    let humidity = 0
    let pressure = 0
    // console.log(map[date])
    map[date].forEach((item)=>{
      //Busco la temperatura maxima y minima de cada dia
      minTemp = Math.min(minTemp,item['main']['temp_min']);
      maxTemp = Math.max(maxTemp,item['main']['temp_max']);
      temp += item['main']['temp']
      humidity += item['main']['humidity']
      pressure += item['main']['pressure']
    })
    temp /= map[date].length
    pressure /= map[date].length
    humidity /= map[date].length
    //Esto lo hago para poder extraer el dia
    const day = new Date(date)
    const ob = {
      day:months[day.getDay()], numberday: date,
      minTemp, maxTemp, temp, pressure, humidity}
    listObj.push(ob)
  }
  return listObj
}

const groupWeatherByDay = list => {
  //voy a retornar un mapa("fecha"-> [datos])
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
    const listObj = end(map)
    resolve(listObj)
  })
  .catch(error => {
    reject(error)
  })
})
}

export {processDataForecast}