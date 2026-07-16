import { Request, Response } from "express";

import { CreateBookingUseCase } from "../use-case/CreateBookingUseCase";
import { GetAllBookingsUseCase } from "../use-case/GetAllBookingsUseCase";
import { GetBookingByIdUseCase } from "../use-case/GetBookingByIdUseCase";
import { UpdateBookingUseCase } from "../use-case/UpdateBookingUseCase";
import { DeleteBookingUseCase } from "../use-case/DeleteBookingUseCase";

import { GetBookingsByClientIdUseCase } from "../use-case/GetBookingsByClientIdUseCase";
import { GetBookingsBySessionIdUseCase } from "../use-case/GetBookingsBySessionIdUseCase";


export class BookingController {

    constructor(
        private readonly createBookingUseCase: CreateBookingUseCase,
        private readonly getAllBookingsUseCase: GetAllBookingsUseCase,
        private readonly getBookingByIdUseCase: GetBookingByIdUseCase,
        private readonly updateBookingUseCase: UpdateBookingUseCase,
        private readonly deleteBookingUseCase: DeleteBookingUseCase,
        private readonly getBookingsByClientIdUseCase: GetBookingsByClientIdUseCase,
        private readonly getBookingsBySessionIdUseCase: GetBookingsBySessionIdUseCase,
    ) {}


    async create(req: Request, res: Response) {

        const booking = await this.createBookingUseCase.execute(
            req.body
        );

        return res.status(201).json(booking);
    }


    async findAll(req: Request, res: Response) {

        const bookings = await this.getAllBookingsUseCase.execute();

        return res.status(200).json(bookings);
    }


    async findById(req: Request, res: Response) {

        const { bookingId } = req.params;

        const booking = await this.getBookingByIdUseCase.execute(
            Number(bookingId)
        );

        return res.status(200).json(booking);
    }


    async update(req: Request, res: Response) {

        const { bookingId } = req.params;

        const booking = await this.updateBookingUseCase.execute(
            Number(bookingId),
            req.body
        );

        return res.status(200).json(booking);
    }


    async delete(req: Request, res: Response) {

        const { bookingId } = req.params;

        await this.deleteBookingUseCase.execute(
            Number(bookingId)
        );

        return res.sendStatus(204);
    }


    async findByClientId(req: Request, res: Response) {

        const { clientId } = req.params;

        const bookings = await this.getBookingsByClientIdUseCase.execute(
            Number(clientId)
        );

        return res.status(200).json(bookings);
    }


    async findBySessionId(req: Request, res: Response) {

        const { sessionId } = req.params;

        const bookings = await this.getBookingsBySessionIdUseCase.execute(
            Number(sessionId)
        );

        return res.status(200).json(bookings);
    }

}