import React, { Component } from 'react';
import ForecastItem from './ForecastUVI'
import { Container, Grid, Segment, Header } from 'semantic-ui-react'
import './DetailsUVI.css'

class ForecastListUVI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      obj: null
    };
  }

  genItem(list){
    const items = [];
    for (const key in list){
      items.push(
        <Segment id='datailsegment'>
        <Grid.Column>
            <ForecastItem day={list[key]['day']}
              uvi={list[key]['value']}/>
        </Grid.Column>
        </Segment>
      )
    }
    return items
  }

  render() {
    return (
      <Container>
        <Header> Forescasted UVI index:</Header>
        <Segment compact id='datailsegment'>
          {this.genItem(this.props.list)}
        </Segment>
        {this.state.visible}
      </Container>
    )
  }
}

  export default ForecastListUVI;
