# 🎮 Simiplay – E-commerce de Chaves de Jogos

Projeto fullstack para venda de chaves digitais (keys) de jogos. O sistema permite cadastro, login e futuramente compras com integração a banco de dados e autenticação.

---

## 🚀 Tecnologias

### Front-end (`client/`)
- React
- Vite
- React Hook Form (RHF)
- CSS Modules
- Axios
- Bootstrap

### Back-end (`server/`)
- Node.js
- Express
- PostgreSQL
- dotenv
- pg (driver do PostgreSQL)
- bcrypt
- JWT (jsonWebtoken)
- nodemon
- cors

---

## 📁 Estrutura do projeto

```bash
📁 simiplay_store/
├── client/                # Front-end em React
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Main.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── server/                # Back-end com Express
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── controllers/
│   │   └── authController.js
│   ├── database/
│   │   └── index.js
│   ├── middleware/
│   │   ├── authenticateToken.js
│   │   └── errorHandler.js
│   ├── repositories/
│   │   └── userRepository.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── index.js
│   │   └── userRoutes.js
│   └── utils/
│       └── createError.js
├── package.json           # Scripts unificados (instalação e dev)
├── .gitignore
├── .gitattributes
└── README.md              # Este arquivo
```
---

## ⚙️ Instalação e uso local

### Pré-requisitos

- Node.js instalado
- PostgreSQL rodando localmente
- Banco de dados criado com a tabela `usuarios`

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
JWT_SECRET=sua_chave_secreta
```

### 4. Rode o projeto completo 

```bash
npm run dev
```

### 🧾 SQL de exemplo

```bash
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);
```

### 🔐 Proximas melhorias

- Tela de catálogo com listagem de games
- Carrinho de compras

### 👨‍💻 Autor

Marcello Augusto 