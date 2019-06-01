/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import PropTypes from 'prop-types';

const options = {
  axisX: {
    // The offset of the labels to the chart area
    offset: 30,
    // Position where labels are placed.
    position: 'end',
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: -20,
      y: 0,
    },
    showLabel: true,
    showGrid: false,
    labelInterpolationFnc: Chartist.noop,
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the labels to the chart area
    offset: 40,
    // Position where labels are placed
    position: 'start',
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0,
    },
    showLabel: true,
    showGrid: false,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: Chartist.noop,
  },
  showLine: true,
  showPoint: false,

  lineSmooth: true,
  fullWidth: true,

};
const type = 'Line';

class GraphForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    const { data, kind } = this.props;
    if (data != null) {
      if (kind) {
        const { hours, temp } = data;
        const obj = { labels: hours, series: [temp] };
        this.setState({ data: obj });
      } else {
        const days = [];
        for (const value in data) {
          days.push(value);
        }
        const obj = { labels: days, series: [data] };
        this.setState({ data: obj });
      }
    }
  }

  render() {
    const { data } = this.state;
    return data && <ChartistGraph data={data} options={options} type={type} />;
  }
}
GraphForecast.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  kind: PropTypes.number.isRequired,
};
export default GraphForecast;
