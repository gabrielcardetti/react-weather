import React from 'react';
import './Details.css'
import Graph from './GraphForecast'
import { Header, Grid, Icon } from 'semantic-ui-react'

const details = props => {
    return(
      <div>
        <div id='datailsContainer'>
          <div id='leftDetail'>
            <Header size='huge'>{props.day}</Header>
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

export default details