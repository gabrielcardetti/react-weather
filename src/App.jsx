import React, { Component } from 'react';
import { Container, Divider, Tab } from 'semantic-ui-react';
import Header from './components/Header';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: '',
      loading: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(coords) {
    this.setState({ coords, loading: false });
  }

  render() {
    const { coords } = this.state;
    return (
      <div>
        <Container textAlign="center">
          <Header onSelect={cords => this.handleSelect(cords)} />
        </Container>
        <Container textAlign="justified" fluid>
          <Divider />
          { coords === '' ? null
            : (
              <Tab className="body"
                panes={[ 
                  { menuItem: 'Actual', render: () => <Tab1 {...this.state}/> },
                  { menuItem: 'Extendido', render: () => <Tab2 {...this.state}/> },
                  { menuItem: 'Estadisticas', render: () => <Tab3 {...this.state}/> },
                ]}
              />
            )
          }
        </Container>
      </div>
    );
  }
}

export default App;
