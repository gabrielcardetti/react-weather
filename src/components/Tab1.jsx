/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PrimaryWeather from './PrimaryWeather';
import { currentWeather } from '../api/OpenWeather';

const degree = ' \xB0';

class Tab1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wind: '',
      temp: '',
      sunset: '',
      sunrise: '',
      minTemp: '',
      maxTemp: '',
      preassure: '',
      humidity: '',
      icon: '',
      loading: true,
    };

    this.getData = this.getData.bind(this);
    this.set = this.set.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    const { coords } = this.props;
    if (prevProps.coords !== coords) {
      this.set();
      this.getData();
    }
  }

  getData() {
    const { coords } = this.props;
    const { lat, lng } = coords;
    currentWeather(lat, lng)
      .then((data) => {
        const sunset = new Date(data.sys.sunset * 1000);
        const sunrise = new Date(data.sys.sunrise * 1000);
        this.setState(
          {
            wind: `${data.wind.speed}m/s`,
            temp: data.main.temp + degree,
            sunset: `${sunset.getHours()}: ${sunset.getMinutes()}Hs`,
            sunrise: `${sunrise.getHours()}: ${sunrise.getMinutes()}Hs`,
            minTemp: data.main.temp_min + degree,
            maxTemp: data.main.temp_max + degree,
            preassure: `${data.main.pressure}hPa`,
            humidity: `${data.main.humidity}%`,
            loading: false,
            icon: data.weather[0].icon,
          },
        );
      });
  }

  set() {
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;
    return (
      <Tab.Pane loading={loading}>
        <Container>
          <PrimaryWeather
            {...this.state}
          />
        </Container>
      </Tab.Pane>
    );
  }
}
Tab1.propTypes = {
  coords: PropTypes.object.isRequired,
};
export default Tab1;
