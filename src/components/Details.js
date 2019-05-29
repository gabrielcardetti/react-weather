import React from 'react';
import PropTypes from 'prop-types';
import './Details.css'
import Graph from './GraphForecast'
import { Header, Grid, Icon } from 'semantic-ui-react'

const Details = props => {
    return(
      <div>
        <div id='headerDetail'>
          <Header size='huge'>{props.day}</Header>
        </div>
        <div id='datailsContainer'>
          <div id='leftDetail'>
            <p>??: {props.numberday}</p>
            <p>Humedad: {props.humidity}</p>
            <p>Presion: {props.pressure}</p>
          </div>
          <div id='rightDetail'>
            <p>Temperatura Maxima: {props.minTemp}</p>
            <p>Temperatura Promedio: {props.temp}</p>
            <p>Temperatura Maxima: {props.maxTemp}</p>
          </div>
        </div>
        <div id='graphDetail'>
          <Graph data={props.graphData}/>
        </div>
      </div>)
}

Details.propTypes = {
  day: PropTypes.string,
  numberday: PropTypes.string,
  humidity: PropTypes.int,
  pressure: PropTypes.int,
  minTemp: PropTypes.int,
  maxTemp: PropTypes.int,
  graphData: PropTypes.object,
}
export default Details