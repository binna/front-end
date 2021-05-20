import React from 'react';
import axios from 'axios';
import useAsync from '../useAsync';

// useAsync에서 Promise의 결과 바로 data에 담기 때문에,
// 요청을 한 이유 response에서 data 추출하여 반환하는 함수를 따로 만듦
async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

function User({id}) {
    const [state] = useAsync(() => getUser(id), [id]);
    const {loading, data: user, error} = state;

    if(loading) return <div>로딩중 ... </div>
    if(error) return <div>에러가 발생!!</div>
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    )
}

export default User;