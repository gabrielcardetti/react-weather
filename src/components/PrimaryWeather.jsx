/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import './PrimaryWeather.css';
import SVG from 'react-inlinesvg';
import { WeatherIcons } from './WeatherIcons';

const PrimaryWeather = (props) => {
  const {
    icon, temp, preassure, minTemp, sunrise, wind, humidity, maxTemp, sunset,
  } = props;
  return (
    <div id="container">
      <div id="imageContainer">
        {WeatherIcons[icon]
          ? <SVG src={WeatherIcons[icon]} className="lsvg" />
          : null}
        <Header size="huge">{temp}</Header>
      </div>
      <div className="infoContainer">
        <Header size="tiny">{`Presion: ${preassure}`}</Header>
        <Header size="tiny">{`Temperatura Minima: ${minTemp}`}</Header>
        <Header size="tiny">{`Amanecer: ${sunrise}`}</Header>
        <Header size="tiny">{`Viento: ${wind}`}</Header>
      </div>
      <div className="infoContainer">
        <Header size="tiny">{`Humedad: ${humidity}`}</Header>
        <Header size="tiny">{`Temperatura Maxima: ${maxTemp}`}</Header>
        <Header size="tiny">{`Anochecer: ${sunset}`}</Header>
      </div>
    </div>
  );
};

PrimaryWeather.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  preassure: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,

};
export default PrimaryWeather;
