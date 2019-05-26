import React from 'react';
import Item from './Basicview2'
import { Container, Grid} from 'semantic-ui-react'

const genItem = list => {
  const items = []
  for (const key in list){
    const item = list[key]
    items.push(
      <Grid.Column>
        <Item {...item}/>
      </Grid.Column>
    )
  }
  return items
}
const List = props => (
  <Container>
      <Grid>
      {genItem(props.list)}
    </Grid>
  </Container>
);

export default List