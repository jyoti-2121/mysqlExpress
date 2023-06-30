var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'emp-module',
    port: '3306'
});

pool.getConnection((err)=>{
    if(err) throw err
    console.log('database is connected')
})

module.exports.pool = pool;