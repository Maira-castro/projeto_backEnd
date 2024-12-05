const serviceLogin = require('../services/serviceLogin.js')
//fazer login
const controllerLogin = (req,res) => {
    serviceLogin(req,res)
}

module.exports = controllerLogin