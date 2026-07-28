import { BookingRepository } from "../../../../application/booking/domain/BookingRepository";

import { CreateBookingDTO } from "../../../../application/booking/dto/CreateBookingDTO";
import { UpdateBookingDTO } from "../../../../application/booking/dto/UpdateBookingDTO";

import { Booking } from "../../../../generated/prisma/client";

import { db } from "../db";



export class PrismaBookingRepository
    implements BookingRepository {

    async create(
        data: CreateBookingDTO
    ): Promise<Booking> {

        return db.booking.create({
            data
        });

    }

    async findAll() {

        return db.booking.findMany();

    }

    async findById(id: number) {

        return db.booking.findUnique({
            where: {
                idBooking: id
            }
        });

    }

    async findAllByClientId(clientId: number) {

        return db.booking.findMany({
            where: {
                clientId
            }
        });

    }

    async findAllBySessionId(sessionId: number) {

        return db.booking.findMany({
            where: {
                sessionId
            }
        });

    }

    async update(
        id: number,
        data: UpdateBookingDTO
    ) {

        return db.booking.update({
            where: {
                idBooking: id
            },
            data
        });

    }

    async delete(id: number) {

        await db.booking.delete({
            where: {
                idBooking: id
            }
        });

    }


}