import React from 'react';
import Hello from './component/hello';
import Wrapper from './component/wrapper';

import './app.css';


function App() {
  const name = 'apple';

  const style = {
    backgroundColor: 'deepskyblue',
    color: 'white',
    fontSize: 40,
    padding: '1rem'
  }

  return (
    <>
    { /* CSS를 적용하는 방법 : className 속성에 적용 */ }
      <Wrapper>
      <div style={style}>Hello!</div>
      <div className="deeppink-box">{name}</div>
      <Hello name="apple" color="gold" isSpecial={true}/>
      <Hello name="banana" color="yellowgreen"/>
      <Hello/>
      </Wrapper>
    </>
  );
}

export default App;