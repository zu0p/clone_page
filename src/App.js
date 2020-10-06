import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
 
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Route path="/" exact={true} component={Home} /> 
      </HashRouter>
    </div>
  );
}

export default App;