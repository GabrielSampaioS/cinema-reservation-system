import { TheatreRepository } from "../domain/TheatreRepository"
import { CreateTheatreDTO } from "../dto/CreateTheatreDTO"
import { UpdateTheatreDTO } from "../dto/UpdateTheatreDTO"
import {db} from "../../../infrastructure/database/prisma/db"
import { Theatre } from "@prisma/client";

"@/domain/repositories/TheatreRepository";

export class PrismaTheatreRepository implements TheatreRepository {
    async create(data: CreateTheatreDTO) {
        return db.theatre.create({
            data,
        });
    }

    async findAll() {
        return db.theatre.findMany();
    }

    async findById(id: number) {
        return db.theatre.findUnique({
            where: {
                idTheatre: id,
            },
        });
    }

    async update(id: number, data: UpdateTheatreDTO) {
        return db.theatre.update({
            where: {
                idTheatre: id,
            },
            data,
        });
    }

    async delete(id: number) {
        await db.theatre.delete({
            where: {
                idTheatre: id,
            },
        });
    }

async findNearby(
    latitude: number,
    longitude: number,
    radiusInKm = 10
): Promise<Theatre[]> {

    const theatres = await db.theatre.findMany();

    return theatres.filter(theatre => {
        const latDiff = Math.abs(theatre.latitude - latitude);
        const lonDiff = Math.abs(theatre.longitude - longitude);

        // Aproximação:
        // 1 grau ≈ 111 km
        const distance = Math.sqrt(
            latDiff * latDiff +
            lonDiff * lonDiff
        ) * 111;

        return distance <= radiusInKm;
    });
}
}