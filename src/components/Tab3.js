import React, {Component} from 'react'
import { Container, Tab} from 'semantic-ui-react'
import {processDataForecast} from '../api/helperForecast'
import ForecastList from './ForecastListUVI'

class Tab3 extends Component {
  
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
         <ForecastList list={this.state.obj}/>
      </Container>
    </Tab.Pane>
    );
    }
}

export default Tab3