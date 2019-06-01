import React from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './DetailsUVI.css';

const color = (uvi) => {
  if (uvi >= 11) return 'violet';
  if (uvi >= 8) return 'red';
  if (uvi >= 6) return 'orange';
  if (uvi >= 3) return 'yellow';
  return 'green';
};

const ForecastUVI = (props) => {
  const { day, uvi } = props;
  return (
    <Grid>
      <Segment compact color="teal">
        <Grid.Row>
          <Grid.Column><Header textAlign="center" size="middle">{day}</Header></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><div className={`${color(uvi)} color`} /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><Header textAlign="center" size="large">{uvi}</Header></Grid.Column>
        </Grid.Row>
      </Segment>
    </Grid>
  );
};
ForecastUVI.propTypes = {
  day: PropTypes.string.isRequired,
  uvi: PropTypes.number.isRequired,
};

export default ForecastUVI;
