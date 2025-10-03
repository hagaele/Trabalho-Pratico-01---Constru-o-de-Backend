const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json()); 


const produtosRouter = require('./routes/produtos');
app.use('/produtos', produtosRouter);

const clientesRouter = require('./routes/clientes');
const fornecedoresRouter = require('./routes/fornecedores');

app.use('/clientes', clientesRouter);
app.use('/fornecedores', fornecedoresRouter);

const funcionariosRouter = require('./routes/funcionarios');
const pedidosRouter = require('./routes/pedidos');

app.use('/funcionarios', funcionariosRouter);
app.use('/pedidos', pedidosRouter);

app.listen(3000, () => {
  console.log(`Servidor a ser executado em http://localhost:3000`);
});



module.exports = app;

