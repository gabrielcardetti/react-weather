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
      <Grid.Column width={4}>
        <SearchBar onSelect={handleSelect} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Button loading={false} basic color='green' size='large'>
          Buscar
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Header;
