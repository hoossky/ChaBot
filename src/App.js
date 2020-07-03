import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, ChatBot } from './components';

function App() {
  return (
      <Router>
        <Link to="/">Home</Link> <br/>
        <Link to="/chat">ChatBot</Link>
        <Route exact path='/chat' component={ChatBot}/>
        <Route exact path='/' component={Home}/>
      </Router>
  );
}


export default App;
