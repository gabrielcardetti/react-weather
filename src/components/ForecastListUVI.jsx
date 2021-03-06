/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Grid, Segment,
} from 'semantic-ui-react';
import ForecastItem from './ForecastUVI';
import './DetailsUVI.css';

const genItem = (list) => {
  const items = [];
  for (const key in list) {
    items.push(
      <Segment id="datailsegment" key={key}>
        <Grid.Column>
          <ForecastItem
            day={list[key].day}
            uvi={list[key].value}
          />
        </Grid.Column>
      </Segment>,
    );
  }
  return items;
};

const ForecastListUVI = (props) => {
  const { list } = props;
  return (
    <Container>
      <Segment compact id="datailsegment">
        {genItem(list)}
      </Segment>
    </Container>
  );
};

ForecastListUVI.propTypes = {
  list: PropTypes.array.isRequired,
};
export default ForecastListUVI;
