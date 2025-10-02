const express = require('express');
const router = express.Router();

let fornecedores = [
    { id: 1, nome: "Distribuidora Lusa",
         contacto: "geral@lusa.com",
         nif: "500123456",
         tipoProduto: "Mercearia Seca" },
    { id: 2, nome: "Lacticínios do Campo",
         contacto: "vendas@campo.pt",
         nif: "500987654",
         tipoProduto: "Lacticínios" }
];


router.get('/', (req, res) => res.json(fornecedores));


router.get('/:id', (req, res) => {
    const fornecedor = fornecedores.find(f => f.id === parseInt(req.params.id));
    if (!fornecedor) return res.status(404).json({ message: "Fornecedor não encontrado." });
    res.json(fornecedor);
});


router.post('/', (req, res) => {
    const { nome, contacto, nif, tipoProduto } = req.body;
    if (!nome || !nif) return res.status(400).json({ message: "Nome e NIF são obrigatórios." });
    const novoFornecedor = { id: Date.now(), nome, contacto, nif, tipoProduto };
    fornecedores.push(novoFornecedor);
    res.status(201).json(novoFornecedor);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, contacto, tipoProduto } = req.body;
    const fIndex = fornecedores.findIndex(f => f.id === id);
    if (fIndex === -1) return res.status(404).json({ message: "Fornecedor não encontrado." });
    if (!nome) return res.status(400).json({ message: "O nome é obrigatório." });
    fornecedores[fIndex] = { ...fornecedores[fIndex], nome, contacto, tipoProduto };
    res.json(fornecedores[fIndex]);
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fIndex = fornecedores.findIndex(f => f.id === id);
    if (fIndex === -1) return res.status(404).json({ message: "Fornecedor não encontrado." });
    fornecedores.splice(fIndex, 1);
    res.status(204).send();
});

module.exports = router;