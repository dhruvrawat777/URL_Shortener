const express=require('express');

const db=require('./db');

module.exports=class db_functions{

    static fetchAll(){
       return db.execute('SELECT * FROM url');   
    };

    static insert(){
        return db.execute('INSERT ');
    }

};