import React from "react";
import { Container,Header, Grid, Image, Segment} from 'semantic-ui-react';
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
      <Header size='tiny'>Preassure:{props.preassure}</Header>
      <Header size='tiny'>Min Temp:{props.minTemp}</Header>
      <Header size='tiny'>Sunrise:{props.sunrise}</Header>
      <Header size='tiny'>Wind:{props.wind}</Header> 
    </div>
    <div className='infoContainer'>
      <Header size='tiny'>Humidity:{props.humidity}</Header>
      <Header size='tiny'>Max Temp:{props.maxTemp}</Header>
      <Header size='tiny'>Sunset:{props.sunset}</Header>
    </div>
  </Segment>
);

export default PrimaryWeather;
