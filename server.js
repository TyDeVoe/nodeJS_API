const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
const md5 = require('md5')

app.get('/',(req,res)=>{
    res.send("Hello browser");
});
app.use(bodyParser.json());



app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    let passHash = md5(req.body.password);
    let userHash = md5(req.body.userName);
    if (userHash =="26367e3e79c46bd3296560b584f1a858" && passHash=="51bca78ac0e26e237d068ed646504c36"){
        res.send("Welcome!")
    } else{
        res.send("Get thee hence, Hacker!");
    }

});

app.listen(port, ()=>{});
