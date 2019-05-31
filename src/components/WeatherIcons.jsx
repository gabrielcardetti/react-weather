import React from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';

const WeatherIcons = {
  '01d': '/animated/day.svg',
  '02d': '/animated/cloudy-day-1.svg',
  '03d': '/animated/cloudy.svg',
  '04d': '/animated/cloudy-day-3.svg',
  '09d': '/animated/rainy-1.svg',
  '10d': '/animated/rainy-6.svg',
  '11d': '/animated/thunder.svg',
  '13d': '/animated/snow.svg',
  '50d': '/animated/day.svg',
  '01n': '/animated/night.svg',
  '02n': '/animated/cloudy-night-1.svg',
  '03n': '/animated/cloudy.svg',
  '04n': '/animated/cloudy-night-3.svg',
  '09n': '/animated/rainy-1.svg',
  '10n': '/animated/rainy-6.svg',
  '11n': '/animated/thunder.svg',
  '13n': '/animated/snow.svg',
  '50n': '/animated/day.svg',
};
const Icon = (props) => {
  const {
    name, size, description, value,
  } = props;
  return (
    <div id="icon">
      <FA className="icon" name={name} size={size} />
      <p>{`${description} ${Math.floor(value)}`}</p>
    </div>
  );
};
Icon.defaultProps = {
  size: '2x',
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export { WeatherIcons, Icon };
