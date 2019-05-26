import React from "react";
import { Container, Tab} from 'semantic-ui-react';
import Basicview2 from './Basicview2';
import List from './List'

let Tab2 = props => {
  return (
  <Tab.Pane >
    <Container>
      <List list={props.list} />
    </Container>
  </Tab.Pane>
  );
  }

export default Tab2