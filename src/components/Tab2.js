import React, {Component} from "react";
import { Container, Tab, LabelDetail} from 'semantic-ui-react';
import ForecastList from './ForecastList'
import {processDataForecast} from '../api/OpenWeather'

class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      obj: null
    };
  }
  componentWillMount(){
    const { lat, lng } = this.props.coords;
    processDataForecast(lat,lng).then((result)=>{
      this.setState({loading:false,obj:result})
    }).catch((error)=>{
      console.log(error)
    })
  }
  getdata(){
    
  }
  render() {
    return (
    <Tab.Pane loading={this.state.loading}>
      <Container>
         <ForecastList list={this.state.obj} />
      </Container>
    </Tab.Pane>
    );
    }
}

export default Tab2