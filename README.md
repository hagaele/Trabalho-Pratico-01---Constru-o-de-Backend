# Trabalho-Pratico-01---Constru-o-de-Backend
Esse repositório foi criado para entrega do trabalho da matéria Construção de Backend 


API de Gestão de Mercado

API RESTful desenvolvida com Node.js e Express para gerir as operações de um mercado. Este projeto inclui a gestão de produtos, clientes, fornecedores, funcionários e pedidos, como parte do trabalho prático da disciplina de Construção de Backend.

Integrantes do Grupo e Contribuições

Nome: Hugo Lima Oliveira
Matricula: 24214290033
Contribuição: Fiz o repositorio e a base do projeto, como o index, o package;json e o readme, fiz tambem a rota de produtos


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



