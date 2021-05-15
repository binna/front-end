import React, {useRef, useState, useMemo} from 'react';
// import Counter from './component/counter';
// import Input from './component/input';
// import MultiInput from './component/multiinput';
// import UserList from './component/userlist'
import UserList from './component/userlist2';
import CreateUser from './component/createUser';

function countActiveUser(users) {
  console.log('선택된 사용자 수를 세는 중 ... ');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: '김사과',
        email: 'apple@apple.com',
        active: true
    },
    {
        id: 2,
        username: '오랜지',
        email: 'orange@orange.com',
        active: false
    },
    {
        id: 3,
        username: '반하나',
        email: 'banana@banana.com',
        active: false
    },
    {
        id: 4,
        username: '이메론',
        email: 'melon@melon.com',
        active: false
    },
    {
        id: 5,
        username: '배애리',
        email: 'berry@berry.com',
        active: false
    }
  ]);

  const nextId = useRef(6);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    // 배열에 새 항목을 추가할 때는 spread 연산자 또는 concat 함수를 사용
    // 1. spread 연산자
    // setUsers([...users, user]);

    // 2. concat 함수
    setUsers(users.concat(user));
    // --------------------------------------------------------------

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }; 

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }

  // return (
  //   <div>
  //     {/* <Counter/> */}
  //     {/* <Input/> */}
  //     {/* <MultiInput/> */}
  //     {/* <UserList/> */}
  //   </div>
  // );

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>선택된 사용자 수 : {count}</div>
    </>
  );
}

export default App;