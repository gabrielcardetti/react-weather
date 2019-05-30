import React from "react";
import PropTypes from 'prop-types';
import { Header, Image, Segment} from 'semantic-ui-react';
import './PrimaryWeather.css';
import SVG from 'react-inlinesvg';
import { WeatherIcons } from './WeatherIcons'

const PrimaryWeather = props => (
  <Segment compact id='container'>
    <div id='imageContainer'>
      <SVG  src={WeatherIcons[props.icon]} />
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
