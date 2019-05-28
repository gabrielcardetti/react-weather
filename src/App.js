import React from "react";
import { Container, Divider, Tab, TabPane } from 'semantic-ui-react'
import Header from './components/Header';
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
const obj1 = { day:"5", numberday:"10", minTemp:" 10", maxTemp:"10"}
const obj2 = { day:"54", numberday:"110", minTemp:" 5", maxTemp:"50"}
const obj3 = { day:"58", numberday:"140", minTemp:" 1", maxTemp:"6"}
const obj4 = { day:"57", numberday:"160", minTemp:" 12", maxTemp:"0"}
const obj5 = { day:"57", numberday:"160", minTemp:" 12", maxTemp:"0"}
const obj6 = { day:"57", numberday:"160", minTemp:" 12", maxTemp:"0"}
const obj7 = { day:"57", numberday:"160", minTemp:" 12", maxTemp:"0"}



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
