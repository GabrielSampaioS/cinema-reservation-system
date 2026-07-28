import { TheatreRepository } from "../../../../application/theatre/domain/TheatreRepository"
import { CreateTheatreDTO } from "../../../../application/theatre/dto/CreateTheatreDTO"
import { UpdateTheatreDTO } from "../../../../application/theatre/dto/UpdateTheatreDTO"
import { db } from "../db"
import { Theatre } from "../../../../generated/prisma/client";



export class PrismaTheatreRepository implements TheatreRepository {
    findNearby(latitude: number, longitude: number, radiusInKm?: number): Promise<Theatre[]> {
        throw new Error("Method not implemented.");
    }
    async create(data: CreateTheatreDTO) {


        const result = await db.theatre.create({
            data,
        });


        return result;
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

}