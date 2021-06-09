const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10, 
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b7f0bea4438933',
    password: '049a9c99',
    database: 'https://www.cleardb.com/database/details?id=E435D9887C2EB3BBBB41ADC69581B119'
});

pool.query = util.promisify(pool.query);

module.exports = pool;
