import React, { useState } from 'react';
// import Box from './component/box'
// import Checkbox from './component/checkbox';
import styled, {css} from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;

  ${props => 
    props.big && css`
      width: 10rem;
      height: 10rem;
  `}
`;

function App() {

  // const [check, setCheck] = useState(false);
  // const onChange = e => {
  //   setCheck(e.target.checked);
  // };

  // // return (
  // //   <>
  // //   <Box/>
  // //   </>
  // // );
  // return ( 
  //   <div>
  //     <Checkbox onChange={onChange} checked={check}>
  //       약관에 모두 동의
  //     </Checkbox>
  //     <p>
  //       <b>check : </b>{check? 'true' : 'false'}
  //     </p>
  //   </div>
  // );

  return (
    <>
      <Circle/>
      <Circle color="deeppink"/>
      <Circle color="blue" big/>
    </>
  );
}

export default App;