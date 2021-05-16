import React from 'react';
import './app.scss';
import Button from './component/button'

function App() {
  return (
    <div className="App">
      <div className="height">
        <Button size="large" onClick={() => console.log('클릭!')}>버튼 1</Button>
        <Button>버튼 2</Button>
        <Button size="small">버튼 3</Button>
      </div>

      <div className="height">
        <Button size="large" color="gray">버튼 4</Button>
        <Button color="gray">버튼 5</Button>
        <Button size="small" color="gray">버튼 6</Button>
      </div>

      <div className="height">
        <Button size="large" color="pink">버튼 7</Button>
        <Button color="pink">버튼 8</Button>
        <Button size="small" color="pink">버튼 9</Button>
      </div>

      <div className="height">
        <Button size="large" color="blue" outline>버튼 10</Button>
        <Button color="gray" outline>버튼 11</Button>
        <Button size="small" color="pink" outline>버튼 12</Button>
      </div>

      <div className="height">
        <Button size="large" color="blue" fullWidth>버튼 10</Button>
        <Button color="gray" fullWidth>버튼 11</Button>
        <Button size="small" color="pink" fullWidth>버튼 12</Button>
      </div>
    </div>
  );
}

export default App;