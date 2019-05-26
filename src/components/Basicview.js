import React from "react";
import { Container,Header, Grid, Image, Segment} from 'semantic-ui-react'
const img = require  ("./imagenes/clima.jpg");

const Basicview = props => (
  <Container>
    <Segment compact>
      <Grid>
        <Grid.Column width={4} textAlign='center'>
          <Image src={img} size='medium' circular/>
          <Header size='huge'>{props.temp}</Header>
          {props.weather}
        </Grid.Column>
        <Grid.Column width={5} verticalAlign='middle' textAlign='center'>
          <Header size='tiny'>Preassure:{props.preassure}</Header>
          <Header size='tiny'>Min Temp:{props.minTemp}</Header>
          <Header size='tiny'>Sunrise:{props.sunrise}</Header>
          <Header size='tiny'>Wind:{props.wind}</Header>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign='middle' textAlign='center'>
          <Header size='tiny'>Humidity:{props.humidity}</Header>
          <Header size='tiny'>Max Temp:{props.maxTemp}</Header>
          <Header size='tiny'>Sunset:{props.sunset}</Header>
        </Grid.Column>
      </Grid>
    </Segment>
  </Container>
)

export default Basicview;