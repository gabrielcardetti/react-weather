import React from "react";
import { Container,Header, Grid, Image} from 'semantic-ui-react'
const img = require  ("./imagenes/clima.jpg");

const Basicview = props => (
    <Container>
        <Grid>
          <Grid.Column width={3} textAlign='center'>
            <Image src={img} size='medium' circular/>
            <Header size='huge'>{props.temp}</Header>
            {props.weather}
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
            <Header size='small'>Preassure:{props.preassure}</Header>
            <Header size='small'>Min Temp:{props.minTemp}</Header>
            <Header size='small'>Sunrise:{props.sunrise}</Header>
            <Header size='small'>Wind:{props.wind}</Header>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
            <Header size='small'>Humidity:{props.humidity}</Header>
            <Header size='small'>Max Temp:{props.maxTemp}</Header>
            <Header size='small'>Sunset:{props.sunset}</Header>
          </Grid.Column>
        </Grid>
    </Container>
)

export default Basicview;