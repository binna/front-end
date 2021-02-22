const nodemailer = require('nodemailer');       // npm i nodemailer

const tansporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: '구글아이디@gmail.com',
		pass: '구글비밀번호'
	},
	host: 'smtp.mail.com',
	port: '465'
});

const mailOptions = {
	from: "발송자_이름<발송자_메일주소>",
	to: "수신자_이름<수신자_메일주소>",
	subject: "node.js의 nodemailer 테스트중입니다.",
	html: "<h2>안녕하세요. 메일이 잘 가나요?</h2><p style='color: deeppink;'>정말 잘 가네요!</p>"
}

tansporter.sendMail(mailOptions, (err, info) => {
    tansporter.close();
    if(err) {
        console.log(err);
    } else {
        console.log(info)
    }
});