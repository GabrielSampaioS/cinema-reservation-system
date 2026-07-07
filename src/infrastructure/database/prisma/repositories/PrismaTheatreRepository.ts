import { TheatreRepository } from "../../../../domain/repositories/TheatreRepository"
import { CreateTheatreDTO } from "../../../../application/use-cases/dto/CreateTheatreDTO"
import { UpdateTheatreDTO } from "../../../../application/use-cases/dto/UpdateTheatreDTO"
import {db} from "../db"

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

    ) {
        // Será implementado depois usando Haversine

        return [];

    }
}