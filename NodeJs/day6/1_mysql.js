const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');         // npm i mysql
const logger = require('morgan');

const app = express();
const port = 3000;
const router = express.Router();

app.use(bodyparser.urlencoded({extended:false}));
app.use(logger('dev'));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'frontenddb',
    debug: false
});

// http://localhost:3000/member/regist (post)
router.route('/member/regist').post((req, res) => {
    const userid = req.body.userid;
    const pass = req.body.pass;
    const name = req.body.name;
    const age = req.body.age;

    console.log(`userid:${userid}, pass:${pass}, name:${name}, age:${age}`);

    if(pool){
        joinMember(userid, pass, name, age, (err, result) => {
            if(!err) {
                if(result) {
                    res.writeHead('200', {'content-type':'text/html;charset=utf8'});
                    res.write('<h2>회원가입 성공</h2>');
                    res.end();
                } else {
                    res.writeHead('200', {'content-type':'text/html;charset=utf8'});
                    res.write('<h2>회원가입 실패</h2>');
                    res.end();
                }
            } else {
                console.log(err);
            }
        });
    }else{
        res.writeHead('200', {'content-type':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    }
});

// http://localhost:3000/member/login (post)
router.route('/member/login').post((req, res) => {
    const userid = req.body.userid;
    const pass = req.body.pass;

    console.log(`userid:${userid}, pass:${pass}`);

    if(pool) {
        loginMember(userid, pass, (err, result) => {
            if(!err) {
                if(result) {
                    console.dir(result);
                    const name = result[0].sm_name;
                    const age = result[0].sm_age;

                    res.writeHead('200', {'content-type':'text/html;charset=utf8'});
                    res.write('<h2>로그인 성공</h2>');
                    res.write(`<p>아이디 : ${userid}</p>`);
                    res.write(`<p>이름 : ${name}</p>`);
                    res.write(`<p>나이 : ${age}</p>`);
                    res.end();
                } else {
                    res.writeHead('200', {'content-type':'text/html;charset=utf8'});
                    res.write('<h2>로그인 실패</h2>');
                    res.end();
                }
            } else {
                console.log(err);
            }
        });
    } else {
        res.writeHead('200', {'content-type':'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결실패</h2>');
        res.end();
    }
});


// --------------------------------------------------------------------------


const joinMember = function(userid, pass, name, age, callback) {
    console.log('joinMember 호출!');

    pool.getConnection((err, conn) => {
        if(!err) {
            console.log('데이터베이스 연결 성공');
            const sql = conn.query('insert into tb_simplemember (sm_userid, sm_pass, sm_name, sm_age) values (?, sha1(?), ?, ?)', [userid, pass, name, age], (err, result) => {
                conn.release();
                console.log('sql 실행 완료!');
                if(!err) {
                    console.log('가입완료');
                    callback(null, result);
                    return;
                } else {
                    callback(err, null);
                }
            });
        }
    });
}

const loginMember = function(userid, pass, callback) {
    console.log('loginMember 호출!');

    pool.getConnection((err, conn) => {
        if(!err) {
            const sql = conn.query('select sm_idx, sm_name, sm_age from tb_simplemember where sm_userid=? and sm_pass=sha1(?)', [userid, pass], (err, result) => {
                conn.release();
                console.log('sql 실행 완료!');
                if(!err) {
                    if(result.length > 0) {
                        console.log('일치하는 사용자를 찾음');
                        callback(null, result);
                    } else {
                        console.log('일치하는 사용자가 없음');
                        callback(null, null);
                    }
                    return;
                } else {
                    callback(err, null);
                }
            });
        } else {
            console.log(err);
        }
    });
}


app.use('/', router);

app.listen(port, () => {
    console.log(`${port}번 포트로 서버 실행중...`);
});