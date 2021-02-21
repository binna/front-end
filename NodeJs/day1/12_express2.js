const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 : 웹 서버 이외의 기능을 넣어줌
app.use((req, res) => {
    res.writeHead('200', {'content-type':'text/html;charset=utf-8'});
    res.end('<h2>익스프레스 서버에서 응답한 메시지 입니다.</h2>');
});

app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
});