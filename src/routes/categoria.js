const express=require('express');
const {getCategorias, getCategoriaId, postCategoria, putCategoria, deleteCategoria} = require('../controllers/controllerCategoria');
const authorization = require('../middleware/authentication')
const categoriaRoutes = express.Router()

//pesquisar categoria
categoriaRoutes.get('/search', getCategorias)

//retorna um produto por ID 
categoriaRoutes.get('/:id', getCategoriaId)

//cria uma nova categoria
categoriaRoutes.post('/',authorization, postCategoria)

//atualiza a categoria
categoriaRoutes.put('/:id',authorization, putCategoria)

//deleta a categoria
categoriaRoutes.delete('/:id',authorization, deleteCategoria)

module.exports= categoriaRoutes

