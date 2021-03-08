const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');      // npm i express-session
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({
    secret : '!@#$%^&*()',
    resave: false,
    saveUninitialized: true
}));

app.get('/login', (req, res) => {
    fs.readFile('login.html', 'utf-8', (err, data) => {
        if(!err) {
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        } else {
            console.log(err);
        }
    });
});

app.post('/loginOk', (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(userid);
    console.log(userpw);

    // admin 1234 일때, 로그인 성공
    if(userid == 'admin' && userpw == '1234') {
        const expiresDay = new Date(Date.now() + (100 * 60 * 60 * 24));
        req.session.member = {
            id: userid,
            userpw: userpw,
            isauth: true
        };
        res.redirect('/welcome');
    } else {
        res.redirect('/fail');
    }
});

app.get('/welcome', (req, res) => {
    if(req.session.member) {
        console.log(req.session.member);
        fs.readFile('welcome.html', 'utf-8', (err, data) => {
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });
    } else {
        res.redirect('/login');
    }
});

app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type':'text/html'});
        res.end(data);
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        console.log('세션이 삭제되었습니다.');
    });
    res.redirect('/login');
});

app.listen(port, (req, res) => {
    console.log(`${port} 포트로 서버 실행중...`);
});