import React from "react";
import {Header,Image, Grid, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './DetailsUVI.css'

const color= props =>{
 const colo = 'blue'
  return(colo);
}

const ForecastUVI = props => (
    <Grid>
      <Segment compact color='teal'>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='middle'>{props.day}</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><div className={color(props.uvi)}></div></Grid.Column>
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