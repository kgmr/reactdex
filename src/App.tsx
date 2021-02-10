import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Entry }  from './components/FrontComponents';
import { Container } from 'react-bootstrap';
import { Front } from './components/Front';

function App() {
  return (
    <Container fluid >
    <div className="App">
      <header className="App-header">
        <Front></Front>
      </header>
    </div>
    </Container>
  );
}

export default App;
