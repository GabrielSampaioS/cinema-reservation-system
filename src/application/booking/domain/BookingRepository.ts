import { Booking } from "@prisma/client";

import { CreateBookingDTO } from "../dto/CreateBookingDTO";
import { UpdateBookingDTO } from "../dto/UpdateBookingDTO";


export interface BookingRepository {
    create(data: CreateBookingDTO): Promise<Booking>;

    findAll(): Promise<Booking[]>;

    findById(id: number): Promise<Booking | null>;

    findAllByClientId(clientId: number): Promise<Booking[]>;

    findAllBySessionId(sessionId: number): Promise<Booking[]>;

    update(id: number,data: UpdateBookingDTO): Promise<Booking>;

    delete(id: number): Promise<void>;

}