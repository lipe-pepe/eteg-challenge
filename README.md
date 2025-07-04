# Cadastro de Clientes

## 🔍 Visão Geral

Este projeto é uma SPA (single-page application) de um formulário para cadastro de clientes. Ela foi desenvolvida principalmente com **TypeScript**, **Next.js** (React) e **Node.js**.

O projeto foi desenvolvido seguindo princípios de **arquitetura limpa**, garantindo uma base sólida e organizada para facilitar a manutenção e evolução futura. Portanto, a aplicação está estruturada em camadas bem definidas, separando responsabilidades.

## 🚀 Como rodar o projeto

### 📦 Pré-requisitos
- Docker instalado ([instalação oficial](https://docs.docker.com/get-docker/))
- Docker Compose (já incluído no Docker Desktop para Windows/Mac ou no pacote docker-compose-plugin para Linux)


### ▶️ Subindo o projeto

Na raiz do repositório, execute:

`docker-compose up --build`

Esse comando irá:
- Construir as imagens do frontend, backend e banco de dados PostgreSQL.
- Rodar as migrações do Prisma automaticamente no backend.
- Inicializar todos os serviços.


### 🌐 Acessando os serviços

Após o build e start, acesse o frontend em http://localhost:3000 e teste a aplicação. A API Backend (Express) pode ser testada em http://localhost:4000 e o banco de dados PostgreSQL estará disponível na porta padrão 5432.

### 🛑 Parando o projeto

Para encerrar e remover os containers:

`docker-compose down`

Se quiser também remover os volumes (dados do banco):

`docker-compose down -v`

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **TypeScript** — para tipagem estática e segurança no desenvolvimento do backend e frontend.
  
- **Next.js** — framework React para frontend com renderização híbrida (SSR/SSG).
  - **Tailwind CSS** — estilização de componentes
  - **React Hook Form** — biblioteca moderna para gerenciamento e validação de formulários React.
  - **Zod** — biblioteca para validação de schemas e tipos de dados no frontend.
  - **React Select** — componente para seleção customizável em formulários React.

- **Node.js** — runtime JavaScript no backend.
  - **Express** — framework para criação da API REST no backend.
  - **Prisma** — ORM moderno para fácil interação com o banco de dados PostgreSQL.

- **PostgreSQL** — banco de dados relacional robusto e escalável.
  
- **Docker** — gerenciamento de containers isolados.


✌️ _Feito por Felipe Pêpe_


