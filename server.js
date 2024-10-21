//require express !
const  express = require ('express');
const connect = require("./config/config")

//create instance
const app=express()

//middleWare
app.use(express.json())

//create PORT
const PORT=8000

//create server
app.listen(PORT,(error)=>{
    error?console.log(error):console.log(`the server is running on port ${PORT}`)
})

connect()