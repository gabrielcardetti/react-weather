import React from "react";
import { Container, Tab} from 'semantic-ui-react';
import ForecastList from './ForecastList'

let Tab2 = props => {
  return (
  <Tab.Pane >
    <Container>
      <ForecastList list={props.list} />
    </Container>
  </Tab.Pane>
  );
  }

export default Tab2