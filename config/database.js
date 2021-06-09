const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10, 
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b7f0bea4438933',
    password: '049a9c99',
    database: 'mysql://b7f0bea4438933:049a9c99@us-cdbr-east-04.cleardb.com/heroku_588ec93143aed8f?reconnect=true'
});

pool.query = util.promisify(pool.query);

module.exports = pool;
