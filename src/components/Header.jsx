import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import './Header.css';
import '../../public/Amiri-Bold.woff';

const mwSticker = require('../../public/mw_sticker.jpg');

class Header extends Component {
  handleSelect(coords) {
    const { onSelect } = this.props;
    onSelect(coords);
  }

  render() {
    return (
      <Grid id="headerContainer" verticalAlign="middle">
        <Grid.Row>
          <Image id="mwSticker" src={mwSticker} />
          <p className="headerTitle" align="left">
            Mai
            <br />
            Weather
          </p>
        </Grid.Row>
        <Grid.Row id="searchPanel">
          <SearchBar onSelect={coords => this.handleSelect(coords)} />
        </Grid.Row>
      </Grid>
    );
  }
}

Header.defaultProps = {
  onSelect: () => {},
};

Header.propTypes = {
  onSelect: PropTypes.func,
};

export default Header;
