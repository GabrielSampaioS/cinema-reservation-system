import { Request, Response } from "express";

import { CreateBookingUseCase } from "../../../application/booking/use-case/CreateBookingUseCase";
import { GetAllBookingsUseCase } from "../../../application/booking/use-case/GetAllBookingsUseCase";
import { GetBookingByIdUseCase } from "../../../application/booking/use-case/GetBookingByIdUseCase";
import { UpdateBookingUseCase } from "../../../application/booking/use-case/UpdateBookingUseCase";
import { DeleteBookingUseCase } from "../../../application/booking/use-case/DeleteBookingUseCase";

import { GetBookingsByClientIdUseCase } from "../../../application/booking/use-case/GetBookingsByClientIdUseCase";
import { GetBookingsBySessionIdUseCase } from "../../../application/booking/use-case/GetBookingsBySessionIdUseCase";
import { CreateBookingDTO } from "../../../application/booking/dto/CreateBookingDTO";

import { BookingResponseDTO } from "../../../application/booking/dto/BookingResponseDTO";
import { UpdateBookingDTO } from "../../../application/booking/dto/UpdateBookingDTO";

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

    async create(req: Request<{}, {}, CreateBookingDTO>, res: Response<BookingResponseDTO>) {
        const booking = await this.createBookingUseCase.execute(req.body);

        return res.status(201).json(booking);
    }

    async findAll(req: Request<{}, {}, CreateBookingDTO>, res: Response<BookingResponseDTO[]>) {
        const bookings = await this.getAllBookingsUseCase.execute();

        return res.status(200).json(bookings);
    }

    async findById(req: Request<{ bookingId: string }, {}, {}>, res: Response<BookingResponseDTO>) {
        const { bookingId } = req.params;

        const booking = await this.getBookingByIdUseCase.execute(Number(bookingId));

        return res.status(200).json(booking);
    }

    async update(
        req: Request<{ bookingId: string }, {}, UpdateBookingDTO>,
        res: Response<BookingResponseDTO>,
    ) {
        const { bookingId } = req.params;

        const booking = await this.updateBookingUseCase.execute(Number(bookingId), req.body);

        return res.status(200).json(booking);
    }

    async delete(req: Request<{ bookingId: string }>, res: Response) {
        const { bookingId } = req.params;

        await this.deleteBookingUseCase.execute(Number(bookingId));

        return res.sendStatus(204);
    }

    async findByClientId(req: Request<{ clientId: string }>, res: Response<BookingResponseDTO[]>) {
        const { clientId } = req.params;

        const bookings = await this.getBookingsByClientIdUseCase.execute(Number(clientId));

        return res.status(200).json(bookings);
    }

    async findBySessionId(
        req: Request<{ sessionId: string }>,
        res: Response<BookingResponseDTO[]>,
    ) {
        const { sessionId } = req.params;

        const bookings = await this.getBookingsBySessionIdUseCase.execute(Number(sessionId));

        return res.status(200).json(bookings);
    }
}
