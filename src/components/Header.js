import React from 'react';
import SearchBar from './SearchBar';
import { Grid, Button } from 'semantic-ui-react';
import './Header.css';

const handleSelect = (addr) => {
  console.log(addr);
}

const Header = () => (
  <Grid id='headerContainer' verticalAlign='middle'>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row>
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
