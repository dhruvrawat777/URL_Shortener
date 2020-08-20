const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"dhruv",
    password:"7579246137"
});

con.connect((err)=>{
    if(err)
        throw err;
    console.log("Connected!");
})