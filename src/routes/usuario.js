const {controllergetUserId,controllerPostUser,controllerPutUser,controllergetDeleteUser}= require('../controllers/contollerUsuarios');
const express=require('express');
const routerUsuario = express.Router()
const authorization = require('../middleware/authentication')


//retorna usuario pelo ID
routerUsuario.get('/:id',(req,res)=>{
    controllergetUserId(req,res)
})
//cria um novo usuario
routerUsuario.post('/',authorization,(req,res)=>{
    controllerPostUser(req,res)
})
//atualiza usuario
routerUsuario.put('/:id',authorization,(req,res)=>{
    controllerPutUser(req,res)
})
//deleta usuario
routerUsuario.delete('/:id',authorization,(req,res)=>{
    controllergetDeleteUser(req,res)
})

module.exports= routerUsuario


