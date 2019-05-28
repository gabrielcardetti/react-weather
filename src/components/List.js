import React, { Component } from 'react';
import Item from './Basicview2'
import { Container, Grid,Button} from 'semantic-ui-react'

class List extends Component {

  click(list){
    console.log('click',list)
  }
  genItem(list){
    const items = []
    for (const key in list){
      items.push(
        <Grid.Column onClick={this.click.bind(this)}>
            <Item {...list[key]}/>
        </Grid.Column>
      )
    }
    return items
  }

  render() {
    return (
      <Container>
        <Grid centered>
          {this.genItem(this.props.list)}
        </Grid>
      </Container>
    )
  }
}
export default List