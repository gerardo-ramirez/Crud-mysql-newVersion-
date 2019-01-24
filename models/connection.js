const mysql = require('mysql2');

const myConnection = mysql.createConnection({
    host:'den1.mysql6.gear.host',
    user:'crudmysql',
    password:'Dn3N_v25_8CM',
    database:'crudmysql'

});
myConnection.connect((err,res)=>{
    if(err){
        console.log('error')
    }else{
        console.log('conecto a la base!!')
    }

});
module.exports= myConnection;