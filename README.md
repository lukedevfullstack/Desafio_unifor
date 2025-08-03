# Academic Management System

Sistema web responsivo para gerenciamento de alunos, professores, cursos, disciplinas e semestres, com autenticação baseada em Keycloak. O sistema oferece diferentes visões e permissões para **administradores**, **coordenadores**, **professores** e **alunos**.

---

## 🧠 Visões por perfil

- **Administrador**: CRUD completo de usuários
- **Coordenador**: CRUD de cursos, disciplinas, semestres e montagem da matriz curricular
- **Professor e Aluno**: visualização da matriz curricular

---

## 🧰 Tecnologias utilizadas

### Backend - Quarkus (Java)

- **Quarkus**: framework leve e performático para microserviços Java
- **RESTEasy Reactive**: APIs REST com alta performance
- **Panache ORM (Hibernate)**: simplificação de persistência com JPA
- **MySQL**: banco de dados relacional
- **Keycloak**: gerenciamento de usuários e autenticação OAuth2/OIDC
- **Docker** + **Docker Compose**: orquestração de ambiente

### Frontend - Angular 15+ (Standalone APIs)

- **Angular Standalone Components**: reduz a complexidade de módulos
- **Angular Router**: navegação entre rotas
- **Tailwind CSS**: estilização responsiva e moderna
- **RxJS**: reatividade e controle de streams
- **HttpClient**: consumo de APIs REST
- **FormBuilder + Validators**: construção de formulários com validação
- **Shadcn UI / Headless UI**: componentes visuais minimalistas e acessíveis
- **Lucide Icons**: ícones limpos e modernos

---

## 🎯 Padrões e boas práticas aplicados

- **Modularização por feature**: cada entidade possui sua própria pasta (`student`, `teacher`, `course`, etc.)
- **Responsividade** com Tailwind (`grid`, `breakpoints`, `max-w`, `p-*`)
- **Injeção de dependência** e **serviços centralizados**
- **Rotas protegidas** por guards integrados ao Keycloak
- **Reactive Forms** com validações síncronas
- **Lazy loading de rotas**
- **Clean Code** e **Separation of Concerns**
- **DRY e reutilização** de componentes como `PageTitleComponent`, `ActionButtonsComponent`, `LoadingComponent`

---

## 🚀 Como rodar a aplicação

### 🔧 Requisitos

- Docker + Docker Compose
- Node.js (v18+ recomendado)
- Angular CLI (`npm install -g @angular/cli`)
- Java 17+
- Maven (`mvn -v`)

---

### ▶️ Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/backend-academic-system.git
   cd backend-academic-system


## Backend
- Java Quarkus
- REST API segura com Keycloak
- Banco PostgreSQL

## Frontend
- Angular 15+
- Angular Material
- Keycloak para autenticação e autorização

## Orquestração
- Docker e Docker Compose com serviços:
  - backend (Quarkus)
  - frontend (Angular)
  - keycloak
  - banco PostgreSQL

## Como rodar
1. Instale Docker e Docker Compose
2. Execute: `docker-compose up --build`
3. Acesse:
   - Frontend: http://localhost:4200
   - Keycloak Admin: http://localhost:8080 (user: admin / admin)

## Observações
- O build do backend será feito dentro do container, portanto leva mais tempo no primeiro build.
- Certifique-se de ter internet para baixar as imagens base e dependências Maven.
