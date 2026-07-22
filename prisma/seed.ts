import "dotenv/config";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  // ==========================
  // Status
  // ==========================
  const pending = await prisma.status.upsert({
    where: {
      idStatus: 1,
    },
    update: {},
    create: {
      description: "PENDING",
    },
  });

  // ==========================
  // Cliente
  // ==========================
  const client = await prisma.client.upsert({
    where: {
      email: "gabriel@email.com",
    },
    update: {},
    create: {
      name: "Gabriel Sampaio",
      email: "gabriel@email.com",
      passwordHash: "123456",
    },
  });

  // ==========================
  // Filme
  // ==========================
  const movie = await prisma.movie.create({
    data: {
      title: "Interestelar",
      description: "Filme de ficção científica",
      duration: 169,
    },
  });

  // ==========================
  // Cinema + Sala + Assentos
  // ==========================
  const theatre = await prisma.theatre.create({
    data: {
      name: "Cine Piracicaba",
      address: "Rua Central, 100",
      city: "Piracicaba",
      state: "SP",
      latitude: -22.7253,
      longitude: -47.6492,

      rooms: {
        create: {
          name: "Sala 1",

          seats: {
            create: [
              {
                row: 1,
                number: 1,
              },
              {
                row: 1,
                number: 2,
              },
              {
                row: 1,
                number: 3,
              },
              {
                row: 2,
                number: 1,
              },
              {
                row: 2,
                number: 2,
              },
            ],
          },
        },
      },
    },
    include: {
      rooms: {
        include: {
          seats: true,
        },
      },
    },
  });

  const room = theatre.rooms[0];

  // ==========================
  // Sessão
  // ==========================
  const session = await prisma.session.create({
    data: {
      movieId: movie.idMovie,
      roomId: room.idRoom,
      startTime: new Date("2026-08-01T20:00:00"),
      price: 39.90,
    },
  });

  // ==========================
  // Reserva
  // ==========================
  const booking = await prisma.booking.create({
    data: {
      clientId: client.idClient,
      sessionId: session.idSession,
      seatId: room.seats[0].idSeat,
      statusId: pending.idStatus,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  console.log({
    theatre,
    movie,
    client,
    session,
    booking,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();
    await pool.end();

    process.exit(1);
  });