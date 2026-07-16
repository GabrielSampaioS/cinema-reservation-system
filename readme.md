# Cinema Reservation System 🎬

API de gerenciamento de cinemas, filmes, salas, sessões e reservas.

O projeto aplica:

- Clean Architecture
- Domain Driven Design (DDD)
- Repository Pattern
- DTO Pattern
- Testes automatizados
- Controle de concorrência
- Cache e filas

---

# Arquitetura

O projeto é organizado por domínio:

```
src
├── application
│   ├── booking
│   ├── client
│   ├── movie
│   ├── room
│   ├── seat
│   ├── session
│   └── theatre
│
├── infrastructure
│   ├── database
│   └── http
│
└── main
    └── factories
```

Cada módulo possui:

- Domain
- DTOs
- Use Cases
- Repository Interface
- Infrastructure

---

# Decisões de arquitetura

## Controllers orientados a entidades

A API segue a regra:

> A URL representa uma entidade do domínio. Path params identificam recursos específicos. Query params representam filtros. Body representa dados enviados para criação ou alteração.

---

# Evitando excesso de endpoints

Antes:

```
PATCH /bookings/:id/confirm
PATCH /bookings/:id/cancel
POST /seats/:id/hold
DELETE /seats/:id/hold
```

Depois:

```
PATCH /bookings/:id
```

Exemplo:

```json
{
  "status": "CONFIRMED"
}
```

---

# Filtros e consultas

Evitar:

```
GET /movies/:movieId/sessions
```

Preferível:

```
GET /sessions?movieId=123
```

---

# Fluxo de reserva

```
Usuário escolhe filme
        |
        v
Escolhe sessão
        |
        v
Escolhe assento
        |
        v
Cria reserva temporária (HOLD)
        |
        v
Pagamento
        |
        v
Reserva confirmada
```

---

# Estados da reserva

- HOLD
- CONFIRMED
- CANCELLED
- EXPIRED

---

# Banco de dados

Tecnologias:

- PostgreSQL
- Prisma ORM

Criar migration:

```bash
npx prisma migrate dev --name init
```

Gerar Prisma Client:

```bash
npx prisma generate
```

---

# Próximas melhorias

## Arquitetura

- [ ] Criar camada centralizada de erros
- [ ] Criar tratamento global de exceções
- [ ] Adicionar validação utilizando Zod
- [ ] Melhorar entidades de domínio

## Sistema de reservas

- [ ] Implementar HOLD de assentos
- [ ] Expiração automática de reservas
- [ ] Controle de concorrência
- [ ] Redis para lock distribuído

## Performance

- [ ] Cache de sessões
- [ ] Redis
- [ ] Filas com RabbitMQ
- [ ] Jobs em background

## Qualidade

- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Testes de carga
- [ ] CI/CD

---

# Tecnologias

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Redis (futuro)
- RabbitMQ (futuro)
- WebSocket (futuro)
