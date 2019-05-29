import React from 'react'
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react'
import PrimaryWeather from './PrimaryWeather'
import { currentUvi, historyUvi, forecastUvi } from '../api/OpenWeather';

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

  getData() {
    const { lat, lng } = this.props.coords;
    currentUvi(lat, lng)
      .then( (data) => {
        this.setState({ current: data.value, });
      })
      .catch( error => this.handleError(error));
    forecastUvi(lat, lng)
      .then( (data) => {
        this.setState({ forecast: data, });
      })
      .catch( error => this.handleError(error));
    historyUvi(lat, lng)
      .then( (data) => {
        var map = data.map((day, index) => day.value);
        map.shift();
        console.log(map);
        this.setState({ history: map, loading: false });
      })
      .catch( error => this.handleError(error));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Tab.Pane loading={this.state.loading && !this.state.error}>
          <Container> 
            <p> {this.state.current} </p>
            <p> {this.state.history ? this.state.history[0] : null} </p>
          </Container>
      </Tab.Pane>
    );
  }
}

export default Tab3
