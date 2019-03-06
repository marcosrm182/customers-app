import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  
  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>

  renderCustomerListContainer = () => <h1>Customer List Container</h1>
   
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />} />
            {/* <Route path="/customers/:dni" render={props => <CustomerContainer {...props} dni={props.match.params.dni} />} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
