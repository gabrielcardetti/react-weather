import React from "react";
import {Header,Image, Grid, Segment} from 'semantic-ui-react';
const img = require  ("./imagenes/clima.jpg");

const ForecastUVI = props => (
    <Grid>
      <Segment compact color='teal'>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='middle'>{props.day}</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='middle'>{props.numberday}</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Image verticalAlign='middle' src={img} size='tiny' circular/></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Header textAlign='center' size='large'>98</Header></Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
)

export default ForecastUVI;