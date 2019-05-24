import React from "react";
import { Container, Divider, Tab } from 'semantic-ui-react'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab1/> },
  { menuItem: 'Tab 2', render: () => <Tab2/> },
  { menuItem: 'Tab 3', render: () => <Tab3/> },
]
const App = () => (
  <div>
    <Container textAlign='center'>HEADERRR</Container>
    <Container textAlign='justified'>
      <Divider />
      <Tab panes={panes} />
    </Container>
  </div>
)
export default App;
