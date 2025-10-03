# Trabalho-Pratico-01---Constru-o-de-Backend
Esse repositório foi criado para entrega do trabalho da matéria Construção de Backend 


API de Gestão de Mercado

API RESTful desenvolvida com Node.js e Express para gerir as operações de um mercado. Este projeto inclui a gestão de produtos, clientes, fornecedores, funcionários e pedidos, como parte do trabalho prático da disciplina de Construção de Backend.

Integrantes do Grupo e Contribuições

Nome: Hugo Lima Oliveira
Matricula: 24214290033
Contribuição: Fiz o repositorio e a base do projeto, como o index, o package;json e o readme, fiz tambem a rota de produtos

Nome: Matheus Estevam Padre
Matricula:24214290048
Contribuição: Fiz os dois arquivos clientes.js e fornecedores.js e complementei o readme

Nome: Matheus de Araujo Praciano
Matricula:24214290024
Contribuição: Fiz o arquivo pedidos.js e funcionarios.js e completei o readme.


Instruções para Instalação e Execução

Passos
Clonar o repositório:

git clone
cd api-mercado

Instalar as dependências:

npm install

Executar o servidor:

npm start

O servidor estará a ser executado em http://localhost:3000.

Lista de Endpoints
A seguir estão os endpoints disponíveis. Para detalhes sobre o corpo (body) das requisições, consulte o ficheiro da collection do Postman ).

Produtos (/produtos)
GET /produtos: Lista todos os produtos.
GET /produtos/:id: Busca um produto específico pelo seu ID.
POST /produtos: Cria um novo produto.
PUT /produtos/:id: Atualiza os dados de um produto existente.
DELETE /produtos/:id: Remove um produto.


Clientes (/clientes)
GET /clientes: Lista todos os clientes.
GET /clientes/:id: Busca um cliente específico pelo seu ID.
POST /clientes: Cria um novo cliente.
PUT /clientes/:id: Atualiza os dados de um cliente existente.
DELETE /clientes/:id: Remove um cliente.

Fornecedores (/fornecedores)
GET /fornecedores: Lista todos os fornecedores.
GET /fornecedores/:id: Busca um fornecedor específico pelo seu ID.
POST /fornecedores: Cria um novo fornecedor.
PUT /fornecedores/:id: Atualiza os dados de um fornecedor existente.
DELETE /fornecedores/:id: Remove um fornecedor.


Funcionários (/funcionarios)
GET /funcionarios: Lista todos os funcionários.
GET /funcionarios/:id: Busca um funcionário específico pelo seu ID.
POST /funcionarios: Cria um novo funcionário.
PUT /funcionarios/:id: Atualiza os dados de um funcionário existente.
DELETE /funcionarios/:id: Remove um funcionário.

Pedidos (/pedidos)
GET /pedidos: Lista todos os pedidos.
GET /pedidos/:id: Busca um pedido específico pelo seu ID.
POST /pedidos: Cria um novo pedido.
PUT /pedidos/:id: Atualiza o status de um pedido existente.
DELETE /pedidos/:id: Remove um pedido.