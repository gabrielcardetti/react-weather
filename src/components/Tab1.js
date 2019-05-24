import React from 'react'
import { Container, Tab} from 'semantic-ui-react'
import Basicview from './Basicview'
let Tab1 = props => {
  return (
  <Tab.Pane >
    <Container>
      <Basicview preassure = " 1027 hpm" minTemp = " 18 C°" 
        sunrise = " 06:30" wind = " 10 Km/h" 
        humidity = " 90 %" maxTemp = " 35 °C" sunset = " 18:23" temp = " 33 C°" weather = " Sunny"/>
    </Container>
  </Tab.Pane>
  );
  }

export default Tab1