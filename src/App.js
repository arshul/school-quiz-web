import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import CreateQuiz from './components/CreateQuiz'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <Router>
      <div className={"ui container"}
          style={{
                    background:"lemonchiffon",
                    // textAlign:"center",
                    height:"100vh"
                }}
      >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*<Route path="/about">*/}
          {/*  <About />*/}
          {/*</Route>*/}
          {/*<Route path="/users">*/}
          {/*  <Users />*/}
          {/*</Route>*/}
          <Route exact path="/" component={Home}/>
          <Route exact path="/create-quiz" component={CreateQuiz}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
