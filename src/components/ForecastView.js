import React from "react";
import { Grid, Image, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg';
import './ForecastView.css'
import { WeatherIcons } from './WeatherIcons'

const ForecastView = props => (
    <Grid onClick={props.onClick}>
      <Segment compact color='teal'>
        <Grid.Row>
          <Grid.Column>{props.day}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{props.numberday}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column >
          {console.log(props.icon,WeatherIcons[props.icon],"sssssssssss")}
          <SVG  className='svg' src={WeatherIcons[props.icon]} />
          </Grid.Column>
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
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  icon: PropTypes.string
}
export default ForecastView;