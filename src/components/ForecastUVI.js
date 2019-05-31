import React from "react";
import {Header,Image, Grid, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './DetailsUVI.css'

const color = (uvi) =>{
  if(uvi >= 11) return "violet";
  if(uvi >= 8) return "red";
  if(uvi >= 6) return "orange";
  if(uvi >= 3) return "yellow";
  return "green";
}

const ForecastUVI = props => (
    <Grid>
      <Segment compact color='teal'>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='middle'>{props.day}</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><div className={color(props.uvi) + ' color'}></div></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='large'>{props.uvi}</Header></Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
)
ForecastUVI.propTypes = {
  day: PropTypes.string,
  uvi: PropTypes.int,
}

export default ForecastUVI;
