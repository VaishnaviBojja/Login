const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const LoginModel = require('./models/Login_R')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/login");

app.post('/signup', (req,res) => {
    LoginModel.create(req.body)
    .then(login_register => res.json(login_register))
    .catch(err => res.json(err))
})

app.listen(3000,() => {
    console.log("server is running")
})