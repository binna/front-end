const fs = require('fs');

// text11.txt 파일 없다 => 예외 처리 필요
// 비동기는 예외 처리를 할 필요가 없다
fs.readFile('text11.txt', 'utf-8', (err, data) => {
    if(err) {
        // 여기서 에러 처리를 하기 때문에...!
        console.log('에러발생! / 비동기');
    } else {}
});

// 동기는 따로 예외처리가 없기 때문에 try ~ catch 문을 이용하여 예외처리를 해줘야 한다!
try {
    const text = fs.readFileSync('text11.txt', 'utf-8');     // 동기
    console.log(`동기식으로 읽음 : ${text}`);
} catch(e) {
    console.log('에러발생! / 동기');
}
console.log('프로그램 종료');