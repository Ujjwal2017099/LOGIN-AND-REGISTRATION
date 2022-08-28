const express = require("express");
const conn = require('./dbs');
const app = express();

app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
     res.render("home.ejs");
     
})
app.get('/login',(req,res)=>{
     res.render("login.ejs");
})
app.get('/register',(req,res)=>{
     res.render("register.ejs");
})
app.post('/register',(req,res)=>{
     const email = req.body.email;
     const name = req.body.name;
     const password = req.body.password;

     var q = `INSERT into temp(name,email,password)values('${name}','${email}','${password}')`
     conn.query(q,(err,result)=>{
          if(err) throw err;

          console.log('inserted')
          res.render('login.ejs')
     })
     
})

app.post('/login',(req,res)=>{
     const email = req.body.email;
     const password = req.body.password;

     const q = `select * from temp where email='${email}' and password='${password}'`;

     conn.query(q,(err,result)=>{
          if(err){
               throw err;
          }
          console.log('user verified');
          res.render('profile.ejs',{name:result[0].name});
     })
})

app.listen(8000);