const express=require('express');
const loginUser = require('../controllers/controllerlogin.js')
const userRoutes = express.Router()

//logar e gerar token
userRoutes.post('/token',(req,res)=>{
    loginUser(req,res)
})
module.exports = userRoutes