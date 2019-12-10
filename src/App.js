import React from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ChartDemo from './chart/ChartDemo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/chartdemo">Chart Demo</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Switch>
            <Route path="/chartdemo">
              <ChartDemo />
            </Route>
            <Route>
              <ChartDemo />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
