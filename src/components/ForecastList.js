import React, { Component } from 'react';
import ForecastItem from './ForecastView'
import { Container, Grid } from 'semantic-ui-react'
import Details from './Details'

class ForecastList extends Component {

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
        <Grid.Column >
            <ForecastItem {...list[key]} onClick={() => this.click(list[key])}/>
        </Grid.Column>
      )
    }
    return items
  }

  
  render() {
    return (
      <Container>
        <Grid centered>
          {this.genItem(this.props.list)}
        </Grid>
        {this.state.visible && <Details {...this.state.obj}/>}
      </Container>
    )
  }
}
export default ForecastList