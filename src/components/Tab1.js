import React from 'react'
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react'
import PrimaryWeather from './PrimaryWeather'
import { currentWeather } from '../api/OpenWeather';

const degree = ' \xB0';

const Spinner = (
  <Dimmer active inverted>
    <Loader size='large'>Loading</Loader>
  </Dimmer>
);

class Tab1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      wind: "",
      temp: "",
      sunset: "",
      sunrise: "",
      minTemp: "",
      maxTemp: "",
      weather: "",
      preassure: "",
      humidity: "",
      loading: true,
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log(this.props.coords);
    const { lat, lng } = this.props.coords;
    console.log( lat, lng);
    currentWeather(lat, lng)
      .then( (data) => {
        const sunset = new Date(data.sys.sunset);
        const sunrise = new Date(data.sys.sunrise);

        this.setState(
          {
            wind: data.wind.speed + 'm/s',
            temp: data.main.temp + degree,
            sunset: sunset.getHours() + ':' + sunset.getMinutes() + 'Hs',
            sunrise: sunrise.getHours() + ':' + sunrise.getMinutes() + 'Hs',
            minTemp: data.main.temp_min + degree,
            maxTemp: data.main.temp_max + degree,
            weather: data.weather.main,
            preassure: data.main.pressure + 'hPa',
            humidity: data.main.humidity + '%',
            loading: false,
          }
        );
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Tab.Pane >
        { this.state.loading ? Spinner :
          <Container>
            <PrimaryWeather 
              { ...this.state }  
            />
          </Container>
        }
      </Tab.Pane>
    );
  }
}

export default Tab1
