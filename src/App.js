import React from "react";
import { Container, Divider, Tab, TabPane } from 'semantic-ui-react'
import Header from './components/Header';
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab1 coords={{lat: 35, lon:139}} /> },
  { menuItem: 'Tab 2', render: () => <Tab2 coords={{lat: 35, lon:139}} /> },
  { menuItem: 'Tab 3', render: () => <Tab3/> },
];
const App = () => (
  <div>
  <Container textAlign='center'>
  <Header />
    </Container>
    <Container textAlign='justified' fluid>
      <Divider />
      <Tab
        menu={{ 
          attached: true, tabular: true, 
          style: { display: "flex", justifyContent: "center" } }}
        panes={panes} />
    </Container>
  </div>
);
export default App;
