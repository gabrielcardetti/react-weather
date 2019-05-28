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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: '',
      loading: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(coords) {
    this.setState({ coords: coords, loading: false });
  }

  render() {
    return (
      <div>
        <Container textAlign='center'>
          <Header onSelect={(coords) => this.handleSelect(coords)}/>
        </Container>
        <Container textAlign='justified'>
          <Divider />
          { this.state.coords === '' ? null :
            <Tab
              panes={[
                { menuItem: 'Actual', render: () => <Tab1 {...this.state} /> },
                { menuItem: 'Extendido', render: () => <Tab2 {...this.state}/> },
                { menuItem: 'Estadisticas', render: () => <Tab3/> },
              ]} 
            />
          }
        </Container>
      </div>
    );
  }
}

export default App;
