import React, {Component} from "react";
import { Container, Tab, LabelDetail} from 'semantic-ui-react';
import ForecastList from './ForecastList'
import {processDataForecast} from '../api/OpenWeather'

class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      obj: null
    };
  }
  componentWillMount(){
    const {lat,lon} = this.props.coords
    processDataForecast(lat,lon).then((result)=>{
      this.setState({visible:true,obj:result})
    }).catch((error)=>{
      console.log(error)
    })
  }
  getdata(){
    
  }
  render() {
    return (
    <Tab.Pane >
      <Container>
        {this.state.visible && <ForecastList list={this.state.obj} />}
      </Container>
    </Tab.Pane>
    );
    }
}

export default Tab2