import React from "react";
import { Container, Divider, Tab, TabPane } from 'semantic-ui-react'
import Header from './components/Header';
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
const obj1 = { day:"MOD", numberday:"04/06", minTemp:"10°C", maxTemp:"18°C"};
const obj2 = { day:"TUE", numberday:"05/06", minTemp:"5°C", maxTemp:"9°C"};
const obj3 = { day:"WED", numberday:"06/06", minTemp:"1°C", maxTemp:"6°C"};
const obj4 = { day:"THU", numberday:"07/06", minTemp:"12°C", maxTemp:"18°C"};
const obj5 = { day:"FRY", numberday:"08/06", minTemp:"12°C", maxTemp:"19°C"};
const obj6 = { day:"SAT", numberday:"09/06", minTemp:"12°C", maxTemp:"20°C"};
const obj7 = { day:"SUN", numberday:"10/06", minTemp:"12°C", maxTemp:"21°C"};



const listTT = {obj1,obj2,obj3,obj4,obj5,obj6,obj7};
const panes = [
  { menuItem: 'Tab 1', render: () => <Tab1 coords={{lat: 35, lon:139}} /> },
  { menuItem: 'Tab 2', render: () => <Tab2 list={listTT}></Tab2> },
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
