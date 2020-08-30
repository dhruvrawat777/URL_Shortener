const express=require('express');

const db=require('./db');
const shortid=require('shortid');

module.exports=class db_functions{

    static fetchAll(){
       return db.execute('SELECT * FROM url');   
    };

    static insert(short,longg){
        console.log("inside insert");
        return db.execute(
            'INSERT INTO url (short,longg) VALUES(?,?)',
        [short,longg]
        );
    }

    static find(shortt){
        console.log("inside finder");
        return db.execute(
            'SELECT longg FROM url where short=?',
            [shortt]
        );
    }
    static generateshort(){
        return shortid.generate();
    }


};