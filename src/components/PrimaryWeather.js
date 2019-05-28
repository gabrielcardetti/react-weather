import React from "react";
import { Header, Image, Segment} from 'semantic-ui-react';
import './PrimaryWeather.css';

const img = require  ("./imagenes/clima.jpg");

const PrimaryWeather = props => (
  <Segment compact id='container'>
    <div id='imageContainer'>
      <Image src={img} size='small' circular/>
      <Header size='huge'>{props.temp}</Header>
      {props.weather}
    </div>
    <div className='infoContainer'>
      <Header size='tiny'>Presion: {props.preassure}</Header>
      <Header size='tiny'>Temperatura Minima: {props.minTemp}</Header>
      <Header size='tiny'>Amanecer: {props.sunrise}</Header>
      <Header size='tiny'>Viento: {props.wind}</Header> 
    </div>
    <div className='infoContainer'>
      <Header size='tiny'>Humedad: {props.humidity}</Header>
      <Header size='tiny'>Temperatura Maxima: {props.maxTemp}</Header>
      <Header size='tiny'>Anochecer: {props.sunset}</Header>
    </div>
  </Segment>
);

export default PrimaryWeather;
