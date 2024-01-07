import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import DetailComponent from './DetailComponent';
import ListComponent from './ListComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/list/:id" component={DetailComponent} />
        <Route path="/list" component={ListComponent} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
