# 🎮 Simiplay – E-commerce de Chaves de Jogos

Projeto fullstack para venda de chaves digitais (keys) de jogos. O sistema permite cadastro, login e futuramente compras com integração a banco de dados e autenticação.

---

## 🚀 Tecnologias

### Front-end (`client/`)
- React
- Vite
- React Hook Form (RHF)
- CSS Modules ou Tailwind (dependendo do seu setup)

### Back-end (`server/`)
- Node.js
- Express
- PostgreSQL
- dotenv
- pg (driver do PostgreSQL)

---

## 📁 Estrutura do projeto

```bash
📁 simiplay_store/
├── client/ # Front-end em React
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── ...
├── server/ # Back-end com Express
│ ├── index.js
│ ├── database.js
│ ├── .env
│ ├── package.json
│ └── ...
├── package.json # Scripts unificados (instalação e dev)
├── .gitignore
└── README.md # Este arquivo
```
---

## ⚙️ Instalação e uso local

### Pré-requisitos

- Node.js instalado
- PostgreSQL rodando localmente
- Banco de dados criado com a tabela `clientes`

### 1. Clone o repositório

```bash
git clone https://github.com/MGT-21/simiplay_store
cd simiplay_store
```

### 2. Instale as dependências do front e do back

```bash
npm run install-all
```
### 3. Configure o arquivo server/.env 

```bash
PORT=3000
CONNECTION_STRING=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

### 4. Rode o projeto completo 

```bash
npm run dev
```

### 🧾 SQL de exemplo

```bash
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL
);
```

### 🔐 Proximas melhorias

- Integração com autenticação JWT
- Hash de senha com bcrypt
- Tela de catálogo com listagem de games
- Carrinho de compras

### 👨‍💻 Autor

Marcello Augusto 