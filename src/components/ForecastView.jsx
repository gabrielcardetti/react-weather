/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import './ForecastView.css';
import { WeatherIcons } from './WeatherIcons';
import './Details.css';


const ForecastView = (props) => {
  const {
    onClick, day, numberday, icon, minTemp, maxTemp,
  } = props;
  return (
    <Grid onClick={onClick}>
      <Segment compact color="teal" id="colordiv">
        <Grid.Row>
          <Grid.Column>{day}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{numberday}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SVG src={WeatherIcons[icon]} className="psvg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {minTemp}
            /
            {maxTemp}
          </Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
  );
};

ForecastView.defaultProps = {
  onClick: () => {},
  humidity: null,
  pressure: null,
};
ForecastView.propTypes = {
  onClick: PropTypes.func,
  day: PropTypes.string.isRequired,
  numberday: PropTypes.string.isRequired,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastView;
