# 🚀 API de Dados SQLite

## 🔎 Objetivo

Esta API foi desenvolvida para fornecer uma interface simples para acessar dados armazenados em um banco de dados SQLite. Ela oferece endpoints para buscar registros de diferentes tabelas e retorná-los no formato JSON. Ideal para situações onde dados históricos precisam ser consultados e manipulados de forma simples.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Para execução do servidor da API.
- **Express**: Framework para construção de APIs RESTful.
- **SQLite3**: Banco de dados leve para armazenamento dos dados.
- **CORS**: Configuração para permitir requisições de diferentes origens.

---

## 📂 Estrutura do Projeto

```
bash
/api
  ├── index.js           # Arquivo principal da API
  ├── banco.db         # Banco de dados SQLite
  ├── node_modules/    # Dependências do projeto
  ├── package.json     # Descrição das dependências
  └── package-lock.json # Controle de versões das dependências
```

💡 Funcionalidades
Conexão com Banco de Dados SQLite: A API se conecta a um banco de dados SQLite chamado banco.db e realiza consultas nas tabelas 2000, 2010 e 2022.

Endpoints:

/dados/2000: Retorna todos os dados da tabela 2000.

/dados/2010: Retorna todos os dados da tabela 2010.

/dados/2022: Retorna todos os dados da tabela 2022.

CORS Habilitado: Permite requisições de outros domínios, facilitando a integração com outras aplicações front-end.

Tratamento de Erros: A API possui tratamento de erros básico, retornando um erro 500 com uma mensagem quando ocorre falha na consulta ao banco de dados.

🚀 Como Rodar a API
Pré-requisitos
Node.js e npm instalados.

Banco de dados banco.db acessível no mesmo diretório do servidor.

Passos para Rodar a API
Clone ou baixe os arquivos da API para seu servidor.

Instale as dependências do projeto: npm install
Inicie o servidor com o comando: node api.js
A API estará rodando na porta 3000 por padrão (ou outra porta definida na variável de ambiente PORT).


