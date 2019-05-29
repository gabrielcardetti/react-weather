import React, { Component } from 'react';
import ForecastItem from './ForecastView'
import PropTypes from 'prop-types'
import { Container, Grid, Segment } from 'semantic-ui-react'
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
        <Segment id='forecastlist'>
        <Grid.Column>
            <ForecastItem 
              day={list[key]['day']}
              numberday={list[key]['numberday']}
              minTemp={list[key]['minTemp']}
              maxTemp={list[key]['maxTemp']}
               onClick={() => this.click(list[key])}/>
        </Grid.Column>
        </Segment>
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
ForecastList.propTypes = {
  data: PropTypes.object
}
export default ForecastList