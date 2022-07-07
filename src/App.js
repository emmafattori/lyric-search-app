import './App.css';
import React from 'react';
import { Provider } from './context';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
            <Index />

          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
