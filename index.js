const mongoose=require('mongoose');
const express=require('express');

const app=express();





const DATABASE="mongodb+srv://ManeeshShukla:Maneesh%40123@cluster0.vjblabw.mongodb.net/mydatabase?retryWrites=true&w=majority"

mongoose.connect(DATABASE)
        .then( ()=> {
            console.log("DB CONNECTED");
        })
        .catch( ()=>  {
            console.log("DB GOT OOPSIE");
        })


app.listen(8000, ()=> {
    console.log("Server is up and running");
})  

app.get('/', (req,res)=> {
    console.log("Hello from the server1");
    res.send("Hello from the server");

}) 