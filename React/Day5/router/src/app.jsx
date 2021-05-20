import React from 'react'
import {Route} from 'react-router-dom';
import Home from './home';
import About from './about';

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  )
}

export default App;