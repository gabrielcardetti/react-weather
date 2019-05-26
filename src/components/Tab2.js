import React from "react"
import { Container, Tab} from 'semantic-ui-react'
import Basicview2 from './Basicview2'
let Tab2 = props => {
  return (
  <Tab.Pane >
    <Container>
      <Basicview2 day = "Mon" minTemp = "18 C°" 
        numberday = "01/05" maxTemp = " 35 C°"/>
    </Container>
  </Tab.Pane>
  );
  }

export default Tab2