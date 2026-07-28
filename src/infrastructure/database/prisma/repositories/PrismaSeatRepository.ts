import { Seat } from "../../../../generated/prisma/client";
import { SeatRepository } from "../../../../application/seat/domain/SeatRepository";
import { CreateSeatDTO } from "../../../../application/seat/dto/CreateSeatDTO";
import { UpdateSeatDTO } from "../../../../application/seat/dto/UpdateSeatDTO";
import { db } from "../db"

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