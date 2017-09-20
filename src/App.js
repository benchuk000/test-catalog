import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header'
import 'font-awesome/css/font-awesome.min.css';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductPage from './components/ProductPage/ProductPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={ProductsPage}/>
              <Route path='/product/:id' component={ProductPage}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
