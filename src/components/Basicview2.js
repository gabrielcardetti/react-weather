import React from "react";
import { Container, Grid, Image} from 'semantic-ui-react'
const img = require  ("./imagenes/clima.jpg");

const Basicview2 = props => (
  <Container>
  <Grid>
    <Grid.Row>
    <Grid.Column width={1}>{props.day}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={1}>{props.numberday}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}><Image src={img} size='tiny' circular/></Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={1}>{props.minTemp}</Grid.Column>
      <Grid.Column width={1}>{props.maxTemp}</Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
)

export default Basicview2;