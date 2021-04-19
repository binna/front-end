module.exports = {
    server_port: 3000,
    db_url: 'mongodb://localhost:27017/frontenddb',
    db_schemas: [{file:'./member_schema', collection:'member2', schemaName:'MemberSchema', modelName:'MemberModel'}],
    facebook: {
        clientID: '112455474192330',
        clientSecret: 'b7bda3904fc3aa454cee165e581dd44d',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}