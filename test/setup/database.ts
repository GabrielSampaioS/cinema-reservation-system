import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({adapter});

export async function cleanDatabase() {
    await prisma.booking.deleteMany();
    await prisma.session.deleteMany();
    await prisma.seat.deleteMany();
    await prisma.room.deleteMany();
    await prisma.movie.deleteMany();
    await prisma.client.deleteMany();
    await prisma.theatre.deleteMany();
    await prisma.status.deleteMany();
}

export async function disconnectDatabase() {
    await prisma.$disconnect();
}