const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'url_shortener',
    password:'7579246137',
});

module.exports=pool.promise();
