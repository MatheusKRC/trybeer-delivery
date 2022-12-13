import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './Context/LoginProvider';
import RegisterProvider from './Context/RegisterProvider';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import OrderDetails from './Pages/OrderDetails';

class App extends Component {
  render() {
    return (
      <LoginProvider>
        <RegisterProvider>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/customer/products" component={ Products } />
            <Route exact path="/customer/checkout" component={ Checkout } />
            <Route exact path="/seller/orders" component={ Orders } />
            <Route exact path="/customer/orders" component={ Orders } />
            <Route exact path="/seller/orders/:id" component={ OrderDetails } />
            <Route exact path="/customer/orders/:id" component={ OrderDetails } />
          </Switch>
        </RegisterProvider>
      </LoginProvider>
    );
  }
}

export default App;
