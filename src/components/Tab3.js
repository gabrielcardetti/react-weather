import React from 'react'
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react'
import Graph from './Graph'
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
    const p1 = currentUvi(lat, lng)
    const p2 =forecastUvi(lat, lng)
    const p3 =historyUvi(lat, lng)
    Promise.all([p1,p2,p3])
    .then(data => {
      let map = data[2].map((day, index) => day.value);
      map.shift();
      this.setState({current: data[0].value, forecast: data[1], history: map, loading:false })
    })
    .catch(error => this.handleError(error))
  }

  componentDidMount() {
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
      <Tab.Pane loading={this.state.loading && !this.state.error}>
          <Container> 
            <p> {this.state.current} </p>
            <p> {this.state.history ? this.state.history[0] : null} </p>
          </Container>
          <div>
            {this.state.history != 0 ? <Graph data={this.state.history} kind={0}/> : null}
          </div>
      </Tab.Pane>
    );
  }
}

export default Tab3
