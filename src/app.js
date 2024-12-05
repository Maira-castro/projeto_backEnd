require('dotenv').config()
const express = require('express');
const app = express()
const usuarioRoutes = require('./routes/usuario')
const categoriaRoutes = require('./routes/categoria')
const loginRoutes = require('./routes/login.js')
const prodtuosRoutes = require('./routes/produtos.js')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// rota padrão para testar as configurações 
app.get('/',(req,res) => {
  res.json({
    message: 'mensagem de inicio',
});
})


app.use('/v1/usuarios', usuarioRoutes);
app.use('/v1/categorias',categoriaRoutes);
app.use('/v1/user',loginRoutes)
app.use('/v1/produtos',prodtuosRoutes)


module.exports = app;