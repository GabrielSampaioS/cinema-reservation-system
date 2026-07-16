import { BookingRepository } from "../domain/BookingRepository";

import { CreateBookingDTO } from "../dto/CreateBookingDTO";
import { UpdateBookingDTO } from "../dto/UpdateBookingDTO";

import { Booking } from "@prisma/client";

import { db } from "../../../infrastructure/database/prisma/db";



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