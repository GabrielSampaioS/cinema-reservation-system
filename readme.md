![alt text](/img/image.png)

antes (vários endpoints)
PATCH /bookings/:id/confirm
PATCH /bookings/:id/cancel
POST  /seats/:id/hold
DELETE /seats/:id/hold

Depois (1 endpoint inteligente)
PATCH /bookings/:id
{
  "status": "CONFIRMED"
}

ou

{
  "status": "CANCELED"
}

Endpoint é para ENTIDADE
👉 Param/query/body é para COMPORTAMENTO

errado
GET /movies/:movieId/sessions
certo
GET /sessions?movieId=123


npx prisma migrate dev --name init
