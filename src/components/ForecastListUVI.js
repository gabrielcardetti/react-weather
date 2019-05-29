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
  click(list){
      this.setState({visible: !this.state.visible, obj: list})
  }
  genItem(list){
    const items = []
    for (const key in list){
      items.push(
        <Segment id='datailsegment'>
        <Grid.Column>
            <ForecastItem {...list[key]}/>
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