const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const static = require('serve-static');
const path = require('path');
const expressErrorHandler = require('express-error-handler');
const socketio = require('socket.io');      // npm i socket.io
const cors = require('cors');               // npm i cors

const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(expressSession({
    secret: '!@#$%^&^*&(',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', static(path.join(__dirname, "public")));

app.use('/', router);
const errerHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errerHandler);

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

const config = require('./config/config');
const database = require('./database/database');

const configPassport = require('./config/passport');
configPassport(app, passport);

const userPassport = require('./routes/route_member');
userPassport(router, passport);

const server = app.listen(config.server_port, () => {
    console.log(`${config.server_port} 포트로 웹 서버 실행중...`);
    database.init(app, config);
});

const io = socketio(server);
console.log('socket.io 서버 준비 완료!');

io.sockets.on('connection', (socket) => {
    console.dir(`connection : ${socket.request.connection._peername}`);
    socket.remoteAddress = socket.request.connection._peername.address;
    socket.remotePort = socket.request.connection._peername.port;
    console.dir(`socket.remoteAddress : ${socket.remoteAddress}`);
    console.dir(`socket.remotePort : ${socket.remotePort}`);

    socket.on('message', function(message) {
        console.log('message 이벤트를 받았습니다.');
        console.dir(message);

        if(message.recepient == 'all') {
            console.log('모든 클라이언트에게 메시지를 보냅니다.');
            io.sockets.emit('message', message);
        }
    });
});