import React from "react";
import { Container, Divider, Tab, TabPane } from 'semantic-ui-react'
import Header from './components/Header';
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'

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
        <Container textAlign='justified' fluid>
          <Divider />
          { this.state.coords === '' ? null :
            <Tab
              panes={[
                { menuItem: 'Actual', render: () => <Tab1 {...this.state} /> },
                { menuItem: 'Extendido', render: () => <Tab2 {...this.state}/> },
                { menuItem: 'Estadisticas', render: () => <Tab3 {...this.state}/> },
              ]} 
            />
          }
        </Container>
      </div>
    );
  }
}

export default App;
