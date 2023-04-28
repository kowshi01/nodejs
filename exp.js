//app.js
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const loginRoute=require('./routes/login');
const messageRoute=require('./routes/message');

app.use(bodyParser.urlencoded({extended: false}));
app.use(loginRoute);
app.use(messageRoute);
app.use((req,res,next)=>{
    res.status(404).send('<h2>Page not found</h2>');
})

app.listen(4000);


//login.js
const express =require('express');

const router=express.Router();


router.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit=localStorage.setItem('username',JSON.stringify(document.getElementById('username').value))
     action="/username1"><input type="text" id="username"name="username"><button type="submit">login</button></form>`);
});
router.get('/username1',(req,res,next)=>{
    res.redirect('/');
});

module.exports=router;

//message.js
const express =require('express');
const router=express.Router();
const fs=require('fs');


router.get('/',(req,res,next)=>{
    fs.readFile('message1.txt', (err,data)=>{
        if(err){
            console.log(err);
            data='no data;'
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value)=JSON.parse(localStorage.getItem('username'))"
         action="/" method="post"><input id="username" type="hidden" name="username">
         <input type="text" id="message"name="message"><button type="submit">Submit</button></form>`);
       
    });
});
router.post('/',(req,res,next)=>{
    console.log(req.body.username)
    fs.writeFileSync("message1.txt",`${req.body.username} : ${req.body.message}`,{flag :'a'},(err)=>{  
        err?console.log(err) : res.redirect('/')
   })  
});

module.exports=router;
