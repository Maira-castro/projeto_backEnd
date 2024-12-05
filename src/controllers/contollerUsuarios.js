//controle de usuario
const {getUserId,postUser,putUser,deleteUser} = require('../services/serviceUsuario')

//retorna usuario pelo ID
const controllergetUserId =(req,res) =>{
    getUserId(req,res)
}
//cria um novo usuario
const controllerPostUser =(req,res) =>{
    postUser(req,res)
}
//atualiza usuario
const controllerPutUser =(req,res) =>{
    putUser(req,res)
}
//deleta usuario
const controllergetDeleteUser =(req,res)=>{
    deleteUser(req,res)
}

module.exports= {
    controllergetUserId,
    controllerPostUser,
    controllerPutUser,
    controllergetDeleteUser
}