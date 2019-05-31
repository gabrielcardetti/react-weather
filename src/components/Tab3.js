import React from 'react'
import { Container, Tab, Dimmer, Loader, Progress } from 'semantic-ui-react'
import Graph from './Graph'
import ListUvi from './ForecastListUVI'
import { currentUvi, historyUvi, forecastUvi } from '../api/OpenWeather';
import { processUviForecast} from '../api/helperForecast'


const degree = ' \xB0';

class Tab3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: '',
      history: [],
      forecast: [],
      loading: true,
      error: false,
    };

    this.getData = this.getData.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError(error) {
    console.error(error);
    this.setState({ error: true });
  }
  
  getColorInfo(uvi) {
    if(uvi >= 11) 
      return {color: "violet", state: "Extremo"};
    if(uvi >= 8) 
      return {color: "red", state: "Muy alto"};
    if(uvi >= 6) 
      return {color: "orange", state: "Alto"};
    if(uvi >= 3) 
      return {color: "yellow", state: "Moderado"};
    return {color: "green", state: "Bajo"};
  }

  getData() {
    const { lat, lng } = this.props.coords;
    const p1 = currentUvi(lat, lng)
    const p2 = forecastUvi(lat, lng)
    const p3 = historyUvi(lat, lng)
    Promise.all([p1,p2,p3])
    .then(data => {
      console.log(data);
      let map = data[2].map((day, index) => day.value);
      map.shift();
      this.setState(
        {
          current: { value:data[0].value, ...this.getColorInfo(data[0].value) }, 
          forecast: processUviForecast(data[1]), 
          history: map, 
          loading:false 
        }
      );
    })
    .catch(error => this.handleError(error))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Tab.Pane loading={this.state.loading && !this.state.error}>
        <Progress 
          label={this.state.current.state} 
          percent={this.state.current.value*(100/12)} 
          color={this.state.current.color}
        />
        <Container>
          <ListUvi list={this.state.forecast}/>
        </Container>
        <div>
          {console.log(this.state.history.length != 0,this.state.history.length)}
          {this.state.history != 0 ? <Graph data={this.state.history} kind={0}/> : null}
        </div>
      </Tab.Pane>
    );
  }
}

export default Tab3
