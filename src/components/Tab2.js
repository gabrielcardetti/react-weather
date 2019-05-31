import React, {Component} from "react";
import { Container, Tab } from 'semantic-ui-react';
import ForecastList from './ForecastList'
import {processDataForecast} from '../api/helperForecast'

class Tab2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      obj: null
    };
    
    this.getData = this.getData.bind(this);
  }

  getData() {
    const { lat, lng } = this.props.coords;
    processDataForecast(lat,lng).then((result)=>{
      this.setState({loading:false,obj:result})
    }).catch((error)=>{
      console.log(error)
    })
  }

  componentWillMount(){
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.coords !== this.props.coords){
      this.setState({ loading: true });
      this.getData();
    }
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
