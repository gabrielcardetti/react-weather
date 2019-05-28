import React from "react";
import { Container, Grid, Image, Segment} from 'semantic-ui-react'
const img = require  ("./imagenes/clima.jpg");

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
          <Grid.Column><Image src={img} size='tiny' circular/></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{props.minTemp}/{props.maxTemp}</Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
)

export default ForecastView;