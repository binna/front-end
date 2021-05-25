import React from 'react';
import qs from 'qs';

const About = ({location}) => {

    // props 전달되는 location 객체에 있는 search 값에서 데이터를 읽을 수 있음
    // (location 안에는 현재 앱이 갖고 있는 주소에 대한 정보)
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 공부하고 있어요.</p>
            {detail && <p>추가적인 내용이 보일거예요</p>}
        </div>
    );
};

export default About;