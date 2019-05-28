import React from 'react';
import './Details.css'
import { Container, Grid } from 'semantic-ui-react'
const details = props => {
    return(
      <div id='datailsContainer'>
        <p>Dia: {props.day}</p>
        <p>??: {props.numberday}</p>
        <p>Temperatura Maxima: {props.maxTemp}</p>
        <p>Temperatura Maxima: {props.minTemp}</p>
      </div>)
}

export default details