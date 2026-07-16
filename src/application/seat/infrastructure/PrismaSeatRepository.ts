import { Seat } from "@prisma/client";
import { SeatRepository } from "../domain/SeatRepository";
import { CreateSeatDTO } from "../dto/CreateSeatDTO";
import { UpdateSeatDTO } from "../dto/UpdateSeatDTO";
import { db } from "../../../infrastructure/database/prisma/db"

export class PrismaSeatRepository implements SeatRepository {

    async create(data: CreateSeatDTO): Promise<Seat> {
        return db.seat.create({
            data
        })
    }
    async findById(id: number): Promise<Seat | null> {
        return db.seat.findUnique({ where: { idSeat: id } })
    }

    findByIdRoom(id: number): Promise<Seat[] | null> {
        return db.seat.findMany({ where: { roomId: id } })
    }
    async update(id: number, data: UpdateSeatDTO): Promise<Seat> {
        return db.seat.update({ where: { idSeat: id }, data })
    }
    async delete(id: number): Promise<void> {
        await db.seat.delete({ where: { idSeat: id } })
    }
}