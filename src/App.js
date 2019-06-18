import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Products from './components/Products';
import Product from './components/Product';
import Card from './components/Card'
import Tracker from './components/Tracker' 
import './App.css';

const products = [
  { id: 1, name: 'Cool product 1', url: '/products/1' },
  { id: 2, name: 'Cool product 2', url: '/products/2' },
  { id: 3, name: 'Cool product 3', url: '/products/3' },
  { id: 4, name: 'Cool product 4', url: '/products/4' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Haelixa Analytics
      </header>
      <Router>
          <Switch>
            <Route exact path="/products/:id" render={routerProps => <Product {...routerProps} products={products} />} />
            <Route exact path="/products" render={routerProps => <Products {...routerProps} products={products} />} />
            <Route path="/" render={routerProps => <Products {...routerProps} products={products} />} />
          </Switch>
      </Router>
      <div className="Container">
        <Card name={'Farm 1'} value={80} />
        <Tracker />
      </div>
    </div>
  );
}

export default App;
