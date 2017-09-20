import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';

export const App = () => (
  <div className="App">
    <Container>
      <Segment>
        <Spreadsheet />
      </Segment>
    </Container>
  </div>
);

export default App;
