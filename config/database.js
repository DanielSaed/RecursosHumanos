const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10, 
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b7f0bea4438933',
    password: '049a9c99',
    database: 'heroku_588ec93143aed8f'
});

pool.query = util.promisify(pool.query);

module.exports = pool;
