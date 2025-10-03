const express = require('express');
const router = express.Router();

let funcionarios = [
    { id: 1, nome: "Carla Mendes", cargo: "Caixa", dataAdmissao: "2023-01-15", salario: 950.00 },
    { id: 2, nome: "Pedro Rocha", cargo: "Repositor", dataAdmissao: "2022-11-20", salario: 980.00 }
];

// READ - Listar todos os funcionários
router.get('/', (req, res) => res.json(funcionarios));

// READ - Obter um funcionário por ID
router.get('/:id', (req, res) => {
    const funcionario = funcionarios.find(f => f.id === parseInt(req.params.id));
    if (!funcionario) return res.status(404).json({ message: "Funcionário não encontrado." });
    res.json(funcionario);
});

// CREATE - Criar um novo funcionário
router.post('/', (req, res) => {
    const { nome, cargo, dataAdmissao, salario } = req.body;
    if (!nome || !cargo) return res.status(400).json({ message: "Nome e cargo são obrigatórios." });
    const novoFuncionario = { id: Date.now(), nome, cargo, dataAdmissao, salario };
    funcionarios.push(novoFuncionario);
    res.status(201).json(novoFuncionario);
});

// UPDATE - Atualizar um funcionário
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, cargo, salario } = req.body;
    const fIndex = funcionarios.findIndex(f => f.id === id);
    if (fIndex === -1) return res.status(404).json({ message: "Funcionário não encontrado." });
    if (!nome || !cargo) return res.status(400).json({ message: "Nome e cargo são obrigatórios." });
    funcionarios[fIndex] = { ...funcionarios[fIndex], nome, cargo, salario };
    res.json(funcionarios[fIndex]);
});

// DELETE - Remover um funcionário
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fIndex = funcionarios.findIndex(f => f.id === id);
    if (fIndex === -1) return res.status(404).json({ message: "Funcionário não encontrado." });
    funcionarios.splice(fIndex, 1);
    res.status(204).send();
});

module.exports = router;
