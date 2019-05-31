import React from "react";
import { Grid, Image, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './Details.css';
const img = require  ("./imagenes/clima.jpg");

const ForecastView = props => (
    <Grid onClick={props.onClick}>
      <Segment compact color='teal' id='colordiv'>
        <Grid.Row>
          <Grid.Column>{props.day}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{props.numberday}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Image src={img} size='tiny' circular/></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{props.minTemp}/{props.maxTemp}</Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
)
ForecastView.propTypes = {
  day: PropTypes.string,
  numberday: PropTypes.string,
  humidity: PropTypes.int,
  pressure: PropTypes.int,
  minTemp: PropTypes.int,
  maxTemp: PropTypes.int,
}
export default ForecastView;