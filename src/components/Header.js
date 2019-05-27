import React from 'react';
import SearchBar from './SearchBar';
import { Grid, Button, Image } from 'semantic-ui-react';
import { Header as Huno } from 'semantic-ui-react';
import './Header.css';
import '../../public/Amiri-Bold.woff';

const mwSticker = require('../../public/mw_sticker.jpg');

const handleSelect = (addr) => {
  console.log(addr);
}

const Header = () => (
  <Grid id='headerContainer' verticalAlign='middle'>
    <Grid.Row>
      <Image id='mwSticker' src={mwSticker}/>
      <p className='headerTitle' align='left'> Mai <br/> Weather </p>
    </Grid.Row>
    <Grid.Row id='searchPanel'>
      <SearchBar onSelect={handleSelect} />
    </Grid.Row>
  </Grid>
);

export default Header;
