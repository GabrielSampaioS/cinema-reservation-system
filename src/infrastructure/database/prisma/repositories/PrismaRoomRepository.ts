import { RoomRepository } from "../../../../application/room/domain/RoomRepository"
import { CreateRoomDTO } from "../../../../application/room/dto/CreateRoomDTO"
import { UpdateRoomDTO } from "../../../../application/room/dto/UpdateRoomDTO"
import { db } from "../db"
import { Room } from "@prisma/client";

export class PrismaRoomRepository implements RoomRepository {

    async create(data: CreateRoomDTO): Promise<Room> {
        return db.room.create({
            data
        });
    }


    async findById(id: number): Promise<Room | null> {
        return db.room.findUnique({
            where: {
                idRoom: id
            }
        });
    }


    async findAllByTheatreId(theatreId: number): Promise<Room[]> {
        return db.room.findMany({
            where: {
                theatreId
            }
        });
    }


    async findByName( //todo: criar filtros com dto
        theatreId: number,
        name: string
    ): Promise<Room | null> {

        return db.room.findFirst({
            where: {
                theatreId,
                name
            }
        });
    }


    async exists(id: number): Promise<boolean> {

        const room = await db.room.findUnique({
            where: {
                idRoom: id
            },
            select: {
                idRoom: true
            }
        });

        return !!room;
    }


    async update(
        id: number,
        data: UpdateRoomDTO
    ): Promise<Room> {

        return db.room.update({
            where: {
                idRoom: id
            },
            data
        });
    }


    async delete(id: number): Promise<void> {

        await db.room.delete({
            where: {
                idRoom: id
            }
        });
    }

}