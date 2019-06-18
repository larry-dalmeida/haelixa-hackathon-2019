import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ProductList from './components/Products';
import Menu from './components/Menu'
import Product from './components/Product';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Haelixa Analytics
      </header>
      <Menu />
      <div className="Container">
        <Router>
            <Switch>
              <Route exact path="/products/:id" render={routerProps => <Product {...routerProps} products={data} />} />
              <Route exact path="/products" render={routerProps => <ProductList {...routerProps} products={data} />} />
              <Route path="/" render={routerProps => <ProductList {...routerProps} products={data} />} />
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
