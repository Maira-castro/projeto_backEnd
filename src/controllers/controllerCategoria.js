const categorias = require('../models/tabelaCategoria');
const categoriaService = require('../services/serviceCategoria');

//Lpesquisar categoria
const getCategorias  =(req,res) =>{
    categoriaService.getCategorias(req,res,categorias)
}
//retorna um produto por ID 
const getCategoriaId =(req,res) =>{
    categoriaService.getCategoriaId(req,res,categorias)
}
//cria uma nova categoria
const postCategoria =(req,res) =>{
    categoriaService.postCategoria(req,res,categorias)
}
//atualiza a categoria
const putCategoria =(req,res) =>{
    categoriaService.putCategoria(req,res,categorias)
}
//deleta a categoria
const deleteCategoria = (req,res) =>{
    categoriaService.deleteCategoria(req,res,categorias)
}






module.exports = {
    getCategorias,
    getCategoriaId,
    postCategoria,
    putCategoria,
    deleteCategoria
}