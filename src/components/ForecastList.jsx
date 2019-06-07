/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Segment } from 'semantic-ui-react';
import ForecastItem from './ForecastView';
import Details from './Details';

class ForecastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      obj: null,
    };
  }

  click(list) {
    this.setState(prevState => ({ visible: !prevState.visible, obj: list }));
  }

  genItem(list) {
    const items = [];
    for (const key in list) {
      items.push(
        <Segment id="forecastlist" key={key}>
          <Grid.Column>
            <ForecastItem
              day={list[key].day}
              numberday={list[key].numberday}
              minTemp={list[key].minTemp}
              maxTemp={list[key].maxTemp}
              icon={list[key].icon}
              onClick={() => this.click(list[key])}
            />
          </Grid.Column>
        </Segment>,
      );
    }
    return items;
  }

  render() {
    const { list } = this.props;
    const { visible, obj } = this.state;
    return (
      <Container>
        <Grid centered>
          {this.genItem(list)}
        </Grid>
        {visible && <Details {...obj} />}
      </Container>
    );
  }
}

ForecastList.propTypes = {
  list: PropTypes.array.isRequired,
};
export default ForecastList;
