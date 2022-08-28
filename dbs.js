const mysql = require('mysql2');
const conn = mysql.createConnection({
     host:'host_name',
     user:'user_name',
     password:'password',
     database:'database_name'
});
conn.connect((err)=>{
     if (err) throw err;
     console.log("connected");
})
module.exports = conn;
