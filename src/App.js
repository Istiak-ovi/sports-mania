import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path="/home">
            <Header/>
            <Home/>
          </Route>
          <Route path="/Details/:idTeam">
            <TeamDetail/>
          </Route>
          <Route path="/*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
