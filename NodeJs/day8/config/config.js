module.exports = {
    server_port: 3000,
    db_url: 'mongodb://localhost:27017/frontenddb',
    db_schemas: [{file:'./member_schema', collection:'member2', schemaName:'MemberSchema', modelName:'MemberModel'}],
    facebook: {
        clientID: '앱 ID',
        clientSecret: '앱 시크릿 코드',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}