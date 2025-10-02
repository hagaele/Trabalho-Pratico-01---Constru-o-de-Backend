const express = require('express');
const router = express.Router();

let produtos = [
    { 
        id: 1, 
        nome: "Arroz", 
        categoria: "Mercearia", 
        preco: 25.50, 
        stock: 100 
    },
    { 
        id: 2, 
        nome: "Leite", 
        categoria: "Lacticínios", 
        preco: 5.90, 
        stock: 150 }
];

router.get('/', (req, res) => {
    res.json(produtos);
});

router.get('/:id', (req, res) => {
    const produto = produtos.find(p => p.id === parseInt(req.params.id));
    if (!produto) return res.status(404).json({ message: "Produto não encontrado." });
    res.json(produto);
});


router.post('/', (req, res) => {
    const { nome, categoria, preco, stock } = req.body;
    if (!nome || !categoria || preco === undefined || stock === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }
    const novoProduto = {
        id: produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1,
        nome,
        categoria,
        preco,
        stock
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, categoria, preco, stock } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) return res.status(404).json({ message: "Produto não encontrado." });
    if (!nome || !categoria || preco === undefined || stock === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }
    
    produtos[produtoIndex] = { ...produtos[produtoIndex], nome, categoria, preco, stock };
    res.json(produtos[produtoIndex]);
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(p => p.id === id);
    if (produtoIndex === -1) return res.status(404).json({ message: "Produto não encontrado." });
    
    produtos.splice(produtoIndex, 1);
    res.status(204).send();
});

module.exports = router;

