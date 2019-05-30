import React from 'react';
import PropTypes from 'prop-types';
import './Details.css'
import Graph from './Graph'
import FA from 'react-fontawesome'
import { Header, Segment } from 'semantic-ui-react'

const Icon = props => {
  return (
    <div id='icon'>
      <FA className='icon' name={props.name} size='2x' />
      <p>{props.description + ' ' + props.value}</p>
    </div>)
}
const Details = props => {
    return(
      <div>
        <div id='headerDetail'>
          <Header size='huge'>{props.day}</Header>
        </div>
        <div id='datailsContainer'>
          <div id='leftDetail'>
            <Icon name='tint' description='Humedad: ' value={props.humidity}/>
            <Icon name='life-ring' description='Presion: ' value={props.pressure}/>
          </div>
          <div id='rightDetail'>
            <Icon name='thermometer-half' description='Temperatura Promedio: ' value={props.temp}/>
            <Icon name='thermometer-quarter' description='Temperatura Minima: ' value={props.minTemp}/>
            <Icon name='thermometer-full' description='Temperatura Maxima' value={props.maxTemp}/>
          </div>
        </div>
        <div id='graphDetail'>
          <Graph data={props.graphData} kind={1}/>
        </div>
      </div>)
}

Details.propTypes = {
  day: PropTypes.string,
  numberday: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  graphData: PropTypes.object,
}
export default Details