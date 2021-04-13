const express = require('express');
const bodyParser = require('body-parser');
const static = require('serve-static');     // npm i serve-static
const path = require('path');
const logger = require('morgan');           // npm i morgan
const multer = require('multer');           // npm i multer

const port = 3000;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', static(path.join(__dirname, 'public')));     // http://localhost:3000/public
app.use('/uploads', static(path.join(__dirname, 'uploads')));   // http://localhost:3000/uploads
app.use(logger('dev'));     // dev, short, common, bombined

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        const extension = path.extname(file.originalname);
        const basename = path.basename(file.originalname, extension);
        callback(null, basename + "_" + Date.now() + extension);
        // apple.png
        // apple_32904820394.png
    }
});

const upload = multer({
    storage: storage,
    limits: {
        files: 5,
        fileSize: 1024 * 1024 * 100
    }
});

router.route('/write').post(upload.array('photo', 1), (req, res) => {
    console.log('/write 호출!');
    try {
        const title = req.body.title;
        const content = req.body.content;
        const files = req.files;
        console.dir(req.files[0]);
        const originalname = files[0].originalname;
        const filename = files[0].filename;
        const mimetype = files[0].mimetype;
        const size = files[0].size;

        console.log(`파일정보 : 원본파일명:${originalname}, 파일이름:${filename}, mimetype:${mimetype}, 파일크기 : ${size}`);

        res.writeHead('200', {'content-type':'text/html;charset=utf-8'});
        res.write('<h2>파일 업로드 성공</h2>');
        res.write('<hr>');
        res.write(`<p>제목 : ${title}</p>`);
        res.write(`<p>내용 : ${content}</p>`);
        res.write(`<p>원본파일명 : ${originalname}}</p>`);
        res.write(`<p>파일명 : ${filename}</p>`);
        res.write(`<p>mimetype : ${mimetype}</p>`);
        res.write(`<p>파일크기 : ${size}</p>`);
        res.write(`<p><img src='/uploads/${filename}' width='200'><\p>`);
        res.end();
    } catch(e) {
        console.log(e);
    }
});

app.use("/", router);

app.listen(port, () => {
    console.log(`${port}포트로 서버 동작중...`);
});