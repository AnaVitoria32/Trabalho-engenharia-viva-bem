# Viva Bem - Sistema Nutricional

Sistema nutricional desenvolvido com React no frontend e Node.js + Express no backend.

---

# Funcionalidades

- Login de usuários
- Dashboard administrativo
- Controle de pacientes
- Área de consultas
- Criação de planos alimentares
- Rotas protegidas
- Logout
- Comunicação Frontend ↔ Backend via API REST

---

# Tecnologias Utilizadas

## Frontend

- React
- React Router DOM
- CSS
- Fetch API

---

## Backend

- Node.js
- Express
- Cors

---

# Estrutura do Projeto

```bash
viva-bem/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   │
│   │   ├── Login.css
│   │   └── Dashboard.css
│   │
│   ├── package.json
│
└── README.md
```

---

# Como Rodar o Projeto

## 1. Clonar Repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Instalar o Node.js

Download:
https://nodejs.org

Verifique instalação:

```bash
node -v
npm -v
```

---

# Rodando o Backend

## Entrar na pasta backend

```bash
cd backend
```

---

## Instalar dependências

```bash
npm install
```

Ou manualmente:

```bash
npm install express cors
```

---

## Rodar servidor

```bash
node server.js
```

Servidor:

```text
http://localhost:3000
```

Mensagem esperada:

```bash
backend rodando em http://localhost:3000
```

---

# Rodando o Frontend

## Entrar na pasta frontend

```bash
cd frontend
```

---

## Instalar dependências

```bash
npm install
```

---

## Instalar React Router

```bash
npm install react-router-dom
```

---

## Rodar aplicação

```bash
npm run dev
```

O terminal exibirá:

```text
http://localhost:5173
```

Abra no navegador.

---

# Rotas da API

# GET /

Retorna status do backend.

## Resposta

```json
{
  "message": "Backend funcionando"
}
```

---

# POST /login

Realiza autenticação do usuário.

## Body

```json
{
  "email": "teste@teste.com",
  "password": "123"
}
```

---

## Sucesso

```json
{
  "token": "token-fake"
}
```

---

## Erro

```json
{
  "message": "erro login"
}
```

---

# GET /dashboard

Retorna dados do dashboard.

## Resposta

```json
{
  "usuarios": 120,
  "consultas": 54,
  "atendimentos": 89
}
```

---

# Fluxo do Sistema

```text
Usuário → Login → Backend → Token →
Dashboard → Dados carregados da API
```

---

# Proteção de Rotas

O sistema utiliza um componente `ProtectedRoute` para impedir acesso ao dashboard sem autenticação.

O token é salvo no:

```js
localStorage
```

---

# Credenciais de Teste

```text
Email: teste@teste.com
Senha: 123
```

---

# Telas do Sistema

## Login

- Autenticação do usuário
- Validação de credenciais
- Redirecionamento para dashboard

---

## Dashboard

- Cards informativos
- Navegação lateral
- Dados vindos da API

---

## Pacientes

- Tabela de pacientes cadastrados

---

## Consultas

- Agenda nutricional

---

## Criar Planos

- Cadastro de plano alimentar

---

# Melhorias Futuras

- Banco de dados
- JWT real
- Cadastro de usuários
- CRUD completo
- Responsividade
- Gráficos
- Upload de imagens
- Integração com APIs externas

---

# Comandos Úteis

## Backend

```bash
node server.js
```

---

## Frontend

```bash
npm run dev
```

---

# Autor

Projeto desenvolvido para fins acadêmicos e estudo de desenvolvimento Full Stack.
