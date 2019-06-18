import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adidas
        </p>
      </header>
        <Card title={'I am a card'} />
    </div>
  );
}

export default App;
