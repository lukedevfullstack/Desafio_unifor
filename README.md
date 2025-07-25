
# Sistema Acadêmico

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
