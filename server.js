const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const users = [
    {email: "dummy@gmail.com" , password : "dummy123"},
    {email: "dummy1@gmail.com" , password : "dummy1234"},
    {email: "dummy2@gmail.com" , password : "dummy1235"},
    {email: "dummy3@gmail.com" , password : "dummy1236"},
    {email: "dummy4@gmail.com" , password : "dummy1237"},
    {email: "dummy5@gmail.com" , password : "dummy1238"}
]

app.get('/',(req,res)=>{
    res.send("hi this is / route")
})


app.post('/create',(req,res)=>{
    res.send("hi this is /create route")
})


app.put('/put',(req,res)=>{
    const {emails,passwords} = req.body;
    let flag = false;
    let arraytobechanged = 0;
    for(let i=0;i<users.length;i++){
        if(users[i].email==emails){
            flag = true;
            arraytobechanged = i;
            break;
        }
    }
    if (flag){
        users[arraytobechanged].password=passwords;
        res.status(201).send("the user was updated successfully",users[arraytobechanged])
    }
    else{
        res.status(400).send("Email not found");
    }
})


app.delete('/delete',(req,res)=>{
    const {emails} = req.body;
    let flag = false;
    let arraytobechanged = 0;
    for(let i=0;i<users.length;i++){
        if(users[i].email==emails){
            flag = true;
            arraytobechanged = i;
            break;
        }
    }
    if (flag){
        users[arraytobechanged]={};
        res.status(201).send("the user was successfully deleted")
    }
    else{
        res.status(400).send("Email not found");
    }

    
})



app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})