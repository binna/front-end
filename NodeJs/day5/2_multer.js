const express = require('express');
const bodyParser = require('body-parser');
const static = require('server-static');
const path = require('path');
const logger = require('morgan');       // npm i morgan
const multer = require('multer');       // npm i multer

const port = 3000;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));
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
        // TODO
    } catch(e) {
        console.log(e);
    }
});

app.use("/", router);

app.listen(port, () => {
    console.log(`${port}포트로 서버 동작중...`);
    connectDB();
});