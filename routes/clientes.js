const express = require('express');
const router = express.Router();

let clientes = [
    { id: 1,
         nome: "João Silva",
          email: "joao.silva@example.com",
           telefone: "912345678",
            nif: "234567890" },
    { id: 2,
         nome: "Maria Santos",
          email: "maria.santos@example.com",
           telefone: "934567890",
            nif: "245678901" }
];


router.get('/', (req, res) => res.json(clientes));


router.get('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).json({ message: "Cliente não encontrado." });
    res.json(cliente);
});


router.post('/', (req, res) => {
    const { nome, email, telefone, nif } = req.body;
    if (!nome || !email || !nif) return res.status(400).json({ message: "Nome, email e NIF são obrigatórios." });
    const novoCliente = { id: Date.now(), nome, email, telefone, nif };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, telefone, nif } = req.body;
    const clienteIndex = clientes.findIndex(c => c.id === id);
    if (clienteIndex === -1) return res.status(404).json({ message: "Cliente não encontrado." });
    if (!nome || !email || !nif) return res.status(400).json({ message: "Nome, email e NIF são obrigatórios." });
    clientes[clienteIndex] = { ...clientes[clienteIndex], nome, email, telefone }; // NIF não se altera
    res.json(clientes[clienteIndex]);
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);
    if (clienteIndex === -1) return res.status(404).json({ message: "Cliente não encontrado." });
    clientes.splice(clienteIndex, 1);
    res.status(204).send();
});

module.exports = router;