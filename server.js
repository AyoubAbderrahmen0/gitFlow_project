//require express !
const  express = require('express');
const connect = require("./connectDB/config")

//create instance
const app=express()

//middleWare
app.use(express.json())

require('dotenv').config()
const PORT = process.env.PORT
//create server
app.listen(PORT,(error)=>{
    error?console.log(error):console.log(`server is running on PORT ${PORT}`)
})
connect()
