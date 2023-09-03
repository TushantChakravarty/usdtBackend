const express=require("express")
// Importing all the routes
const cors = require('cors')
var bodyParser = require('body-parser')

  const paymentRoute = require('./routes/payment')
// Creating express server
const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use("/",paymentRoute)

// Handling routes request
app.get("/",(req,res)=>{
    res.send('hello api')
})
app.listen((2000),()=>{
    console.log("Server is Running")
})