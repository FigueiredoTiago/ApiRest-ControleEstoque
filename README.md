# Controle de Estoque - Backend 🛠️ Acesse Aqui: https://easyestoque.vercel.app/

#Nota de atualizações: 21/02/2025 - o Projeto passara por uma  refatoração Completa com uso de tecnologias mais Modernas e correção de Bugs para Garantir a Qualidade do Aplicativo - Aguardem Novos Updates.

![EasyEstoque](https://i.imgur.com/T72fIE7.png);


**Controle de Estoque** é uma API RESTful construída com as melhores práticas , utilizando as mais recentes tecnologias para garantir desempenho e escalabilidade. Essa aplicação tem como objetivo **gerenciar o estoque de produtos** de forma eficaz, com segurança e desempenho de alta qualidade.

---

## 🚀 Funcionalidades

- **Cadastro e Autenticação de Usuários** 👤: Crie e autentique usuários com segurança, utilizando JWT (JSON Web Token).
- **Gestão de Produtos** 📦: Adicione, edite e remova produtos do estoque.
- **Controle de Estoque** 📊: Monitore as quantidades de produtos no estoque e verifique o status de produtos críticos.
- **Validação de Dados** ✅: Garantia de integridade e consistência dos dados com a validação no backend.
- **Autenticação Segura** 🔐: Senhas criptografadas usando **Bcrypt** e tokens JWT para controle de acesso.
- **Rotas RESTful** 🌐: API com padrões RESTful para comunicação eficiente com o frontend.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** 🚀: Plataforma de desenvolvimento para o backend.
- **MongoDB Atlas** 🗄️: Banco de dados NoSQL hospedado na nuvem, altamente escalável.
- **Express.js** 🌍: Framework minimalista para Node.js, facilitando a criação da API.
- **Mongoose** 🧩: Biblioteca de modelagem de objetos MongoDB para integrar com o Node.js.
- **Bcrypt** 🔑: Utilizado para criptografar senhas e garantir segurança.
- **JSON Web Token (JWT)** 🛡️: Tecnologia para criação de tokens seguros para autenticação.

---

## ⚙️ Instalação

### Pré-requisitos

- Node.js 🚀
- MongoDB Atlas (com uma instância configurada) 🌍

### Passos para Instalação

1. Clone o repositório:

   ```bash
   [git clone https://github.com/seu-usuario/controle-de-estoque-backend.git](https://github.com/FigueiredoTiago/ApiRest-ControleEstoque.git)
   ```

2. Instale as dependências:

   ```bash
   cd controle-de-estoque-backend
   npm install
   ```

3. Configure seu banco de dados MongoDB Atlas. Crie um arquivo `.env` e adicione a variável de ambiente com a URL do seu banco:

   ```bash
   MONGO_URI=mongodb+srv://usuario:senha@cluster0.mongodb.net/estoque?retryWrites=true&w=majority
   ```

4. Execute a aplicação localmente:

   ```bash
   npm start
   ```

A API estará disponível em (http://localhost:5000) para o ambiente local. 🌱

---

## 📑 Estrutura do Projeto

A estrutura do projeto segue os princípios do **Clean Code** e **SOLID**, com uma organização modular e de fácil manutenção. Aqui está a estrutura geral:

```
controle-de-estoque-backend/
│
├── src/
│   ├── controllers/         # Lógica de controle das rotas
│   ├── models/              # Modelos de dados (Mongoose)
│   ├── routes/              # Definições de rotas
│   ├── middleware/          # Funções de middleware (autenticação, validação)
│   ├── services/            # Lógica de negócio
│   ├── utils/               # Funções utilitárias
│   └── server.js            # Arquivo principal do servidor Express
│
└── .env                     # Variáveis de ambiente (ex: MongoDB URI)
```

---

## 🤝 Como Contribuir

1. Faça um fork do projeto 🍴.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`) 🔧.
3. Faça as mudanças e envie para o repositório (`git push origin minha-feature`) 📤.
4. Crie um pull request para a branch `main` 🔄.

---

## 🛡️ Licença

Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes. 📄

---

Espero que esse README ajude a documentar bem o backend do seu projeto com estilo! Se precisar de algum ajuste, estou à disposição! 😄
