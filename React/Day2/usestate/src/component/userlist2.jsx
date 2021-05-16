import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    
    // useEffect(() => {
    //     // console.log('컴포넌트가 화면에 나타남!');
    //     console.log(user);
    //     console.log('user 값이 설정되었음!');
    //     return () => {
    //         // console.log('컴포넌트가 화면에서 사라짐');
    //         console.log(user);
    //         console.log('user가 바뀌기 전...');
    //     }
    // }, [user])

    // deps 파라미터 생략 : 컴포넌트가 리랜더링될 때마다 무조건 호출
    useEffect(() => {
        console.log(user);
    });


    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'deeppink' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>&nbsp;&nbsp;
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default UserList;