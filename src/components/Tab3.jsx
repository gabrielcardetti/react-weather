/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React from 'react';
import { Container, Tab, Progress, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Graph from './Graph';
import ListUvi from './ForecastListUVI';
import { currentUvi, historyUvi, forecastUvi } from '../api/OpenWeather';
import { processUviForecast } from '../api/helperForecast';


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
    this.set = this.set.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    const { coords } = this.props;
    if (prevProps.coords !== coords) {
      this.set(0);
      this.getData();
    }
  }

  getColorInfo(uvi) {
    if (uvi >= 11) { return { color: 'violet', state: 'Extremo' }; }
    if (uvi >= 8) { return { color: 'red', state: 'Muy alto' }; }
    if (uvi >= 6) { return { color: 'orange', state: 'Alto' }; }
    if (uvi >= 3) { return { color: 'yellow', state: 'Moderado' }; }
    return { color: 'green', state: 'Bajo' };
  }

  getData() {
    const { coords } = this.props;
    const { lat, lng } = coords;
    const p1 = currentUvi(lat, lng);
    const p2 = forecastUvi(lat, lng);
    const p3 = historyUvi(lat, lng);
    Promise.all([p1, p2, p3])
      .then((data) => {
        console.log(data);
        const map = data[2].map(day => day.value);
        map.shift();
        this.setState(
          {
            current: { value: data[0].value, ...this.getColorInfo(data[0].value) },
            forecast: processUviForecast(data[1]),
            history: map,
            loading: false,
          },
        );
      })
      .catch(error => this.handleError(error));
  }

  handleError(error) {
    console.error(error);
    this.set(1);
  }

  set(kind) {
    if (kind) this.setState({ error: true });
    else this.setState({ loading: true });
  }

  render() {
    const {
      loading, error, current, forecast, history,
    } = this.state;
    const { state, value, color } = current;
    return (
      <Tab.Pane loading={loading && !error}>
        <Header>Current UVI Index:</Header>
        <Progress
          label={state}
          percent={value * (100 / 12)}
          color={color}
        />
        <Header> Forescasted UVI index:</Header>
        <Container>
          <ListUvi list={forecast} />
        </Container>
        <Header>Last 30 days UVI Index:</Header>
        <div>
          {history.length !== 0 ? <Graph data={history} kind={0} /> : null}
        </div>
      </Tab.Pane>
    );
  }
}
Tab3.propTypes = {
  coords: PropTypes.object.isRequired,
};
export default Tab3;
