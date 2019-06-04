/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';
import { Header } from 'semantic-ui-react';
import Graph from './Graph';
import { Icon } from './WeatherIcons';

const Details = (props) => {
  const {
    day, humidity, pressure, temp, minTemp, maxTemp, graphData,
  } = props;
  return (
    <div>
      <div id="headerDetail">
        <Header size="huge">{day}</Header>
      </div>
      <div id="datailsContainer">
        <div id="leftDetail">
          <Icon name="tint" description="Humedad: " value={humidity} />
          <Icon name="life-ring" description="Presion: " value={pressure} />
        </div>
        <div id="rightDetail">
          <Icon name="thermometer-half" description="Temperatura Promedio: " value={temp} />
          <Icon name="thermometer-quarter" description="Temperatura Minima: " value={minTemp} />
          <Icon name="thermometer-full" description="Temperatura Maxima" value={maxTemp} />
        </div>
      </div>
      <div id="graphDetail">
        <Header>Grafica de Temperatura:</Header>
        <Graph data={graphData} kind={1} />
      </div>
    </div>
  );
};

Details.propTypes = {
  day: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  graphData: PropTypes.object.isRequired,
  temp: PropTypes.number.isRequired,
};
export default Details;
