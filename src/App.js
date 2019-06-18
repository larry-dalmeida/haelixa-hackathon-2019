import React from 'react';
import './App.css';
import Card from './components/Card'
import Tracker from './components/Tracker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adidas
        </p>
      </header>
      <div className="Container">
        <Card name={'Farm 1'} value={80} />
        <Tracker />
      </div>
    </div>
  );
}

export default App;
