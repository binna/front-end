import React from 'react'
import {Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Profiles from './profiles';
import HistorySample from './historySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr/>
      <div>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
      </div>
    </div>
  )
}

export default App;