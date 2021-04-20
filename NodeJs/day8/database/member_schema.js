const { Schema } = require('mongoose');
const crypto = require('crypto');       // npm i crypto

Schema.createSchema = function(mongoose) {
    console.log('createSchema() 호출!');
    const MemberSchema = mongoose.Schema({
        userid: {type:String, require:true, default: ''},
        hashed_password: {type:String, default:''},
        name: {type:String, default:''},
        salt: {type:String},
        age: {type:Number, default:0},
        create_at: {type:Date, default:Date.now},
        update_at: {type:Date, default:Date.now},
        provider: {type:String, default:''},
        authToken: {type:String, default:''},
        facebook: {}
    });

    MemberSchema.virtual('userpw')
                .set(function(userpw) {
                    this._userpw = userpw;
                    this.salt = this.makeSalt();
                    this.hashed_password = this.encryptPassword(userpw);
                })
                .get(function() {
                    return this._userpw;
                });

    MemberSchema.method('makeSalt', function() {
        console.log('makeSalt() 호출!');
        return Math.round((new Date().valueOf() * Math.random())) + '';   // 문자열
    });

    MemberSchema.method('encryptPassword', function(plainText, inSalt) {
        if(inSalt) {    // 로그인
            return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
        } else {        // 회원가입
            // salt에 저장된 값을 가져와서 sha1 암호화를 통해 plainText를 섞어줌 -> 16진수로 변환
            return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
        }
    });

    MemberSchema.method('authenticate', function(plainText, inSalt, hashed_password) {
        if(inSalt) {
            console.log('authenticate() 호출! <inSalt 있음>');
            return this.encryptPassword(plainText, inSalt) == hashed_password;
        } else {
            console.log('authenticate() 호출! <inSalt 없음>');
            return this.encryptPassword(plainText) == this.hashed_password;
        }
    });

    // pre() : 특정 작업이 일어나기 전에 미리 호출되는 메소드이다.
    //         트리거 역할
    MemberSchema.pre('save', (next) => {
        if(!this.isNew) return next();

        if(!validatePresenceOf(this.userid)) {
            next(new Error('유효하지 않은 password입니다.'));
        } else {
            next();
        }
    });

    const validatePresenceOf = function(value) {
        return value && value.length;       // 데이터가 있는지 여부
    }

    console.log('MemberSchema 정의 완료!');
    return MemberSchema;
}

module.exports = Schema;