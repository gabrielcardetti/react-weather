/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ForecastList from './ForecastList';
import { processDataForecast } from '../api/helperForecast';


class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      obj: null,
    };
    this.getData = this.getData.bind(this);
    this.set = this.set.bind(this);
  }

  componentWillMount() {
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
    processDataForecast(lat, lng).then((result) => {
      this.setState({ loading: false, obj: result });
    }).catch((error) => {
      console.error(error);
    });
  }

  set() {
    this.setState({ loading: true });
  }

  render() {
    const { loading, obj } = this.state;
    return (
      <Tab.Pane loading={loading}>
        <Container>
          <ForecastList list={obj} />
        </Container>
      </Tab.Pane>
    );
  }
}

Tab2.propTypes = {
  coords: PropTypes.object.isRequired,
};
export default Tab2;
