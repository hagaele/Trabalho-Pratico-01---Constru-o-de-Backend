const express = require('express');
const router = express.Router();

let pedidos = [
    { id: 1, idCliente: 1, data: "2025-10-02T10:00:00Z", valorTotal: 25.50, status: "Pendente" },
    { id: 2, idCliente: 2, data: "2025-10-02T11:30:00Z", valorTotal: 15.75, status: "Concluído" }
];


router.get('/', (req, res) => res.json(pedidos));


router.get('/:id', (req, res) => {
    const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
    if (!pedido) return res.status(404).json({ message: "Pedido não encontrado." });
    res.json(pedido);
});

// CREATE - Criar um novo pedido
router.post('/', (req, res) => {
    const { idCliente, valorTotal, status } = req.body;
    if (!idCliente || valorTotal === undefined) return res.status(400).json({ message: "idCliente e valorTotal são obrigatórios." });
    const novoPedido = { id: Date.now(), idCliente, data: new Date().toISOString(), valorTotal, status: status || "Pendente" };
    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
});

// UPDATE - Atualizar um pedido (geralmente apenas o status)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const pIndex = pedidos.findIndex(p => p.id === id);
    if (pIndex === -1) return res.status(404).json({ message: "Pedido não encontrado." });
    if (!status) return res.status(400).json({ message: "O campo status é obrigatório para atualização." });
    pedidos[pIndex].status = status;
    res.json(pedidos[pIndex]);
});

// DELETE - Remover um pedido (geralmente não se apaga, mas cancela-se. Aqui vamos remover.)
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pIndex = pedidos.findIndex(p => p.id === id);
    if (pIndex === -1) return res.status(404).json({ message: "Pedido não encontrado." });
    pedidos.splice(pIndex, 1);
    res.status(204).send();
});

module.exports = router;
