/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Grid, Segment, Header,
} from 'semantic-ui-react';
import ForecastItem from './ForecastUVI';
import './DetailsUVI.css';

const genItem = (list) => {
  const items = [];
  for (const key in list) {
    items.push(
      <Segment id="datailsegment">
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
      <Header> Forescasted UVI index:</Header>
      <Segment compact id="datailsegment">
        {genItem(list)}
      </Segment>
    </Container>
  );
};
ForecastListUVI.defaultProps = {
  list: null,
};
ForecastListUVI.propTypes = {
  list: PropTypes.array,
};
export default ForecastListUVI;
