import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Products from './components/Products';
import Product from './components/Product';

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
            <Route exact path="/products" component={routerProps => <Products {...routerProps} products={products} />} />
            <Route path="/" render={Products} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
