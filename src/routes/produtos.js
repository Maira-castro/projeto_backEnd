const { controllerGetProdutos,controllerGetProdutosID, controllerPostProduct, controllerPutProduct, controllerDeleteProduct }= require('../controllers/controllerProdutos');
const authorization = require('../middleware/authentication')
const express = require('express');
const routerProduct = express.Router()

//pesquisar produto
routerProduct.get('/search', controllerGetProdutos)

//retorna produto pelo ID
routerProduct.get('/:id', controllerGetProdutosID)

//criar produto
routerProduct.post('/', authorization,controllerPostProduct)

//atualizar produto
routerProduct.put('/:id', authorization,controllerPutProduct)

//deletar produto
routerProduct.delete('/:id', authorization,controllerDeleteProduct)

module.exports = routerProduct