const express = require('express');
const { getProductID, postProduct, putProduct, deleteProdutos,getProduct } = require('../services/serviceProdutos')

//pesquiar produto
const controllerGetProdutos = (req,res)=>{
    getProduct(req,res)
}

//retorna produto pelo ID
const controllerGetProdutosID = (req,res) => {
    getProductID(req, res)
}

//criar produto
const controllerPostProduct = (req,res) => {
    postProduct(req, res)
}

//atualizar produto
const controllerPutProduct = (req,res) => {
    putProduct(req,res)
}

//deletar produto
const controllerDeleteProduct = (req,res) => {
    deleteProdutos(req,res)
}


module.exports = { 
    controllerGetProdutos,
    controllerGetProdutosID, 
    controllerPostProduct, 
    controllerPutProduct, 
    controllerDeleteProduct }