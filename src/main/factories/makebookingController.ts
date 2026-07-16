import { PrismaBookingRepository } from "../../application/booking/infrastructure/PrismaBookingRepository"

import { BookingController } from "../../application/booking/infrastructure/BookingController";

import { CreateBookingUseCase } from "../../application/booking/use-case/CreateBookingUseCase";
import { DeleteBookingUseCase } from "../../application/booking/use-case/DeleteBookingUseCase";
import { GetAllBookingsUseCase } from "../../application/booking/use-case/GetAllBookingsUseCase";
import { GetBookingByIdUseCase } from "../../application/booking/use-case/GetBookingByIdUseCase";
import { GetBookingsByClientIdUseCase } from "../../application/booking/use-case/GetBookingsByClientIdUseCase";
import { GetBookingsBySessionIdUseCase } from "../../application/booking/use-case/GetBookingsBySessionIdUseCase";
import { UpdateBookingUseCase } from "../../application/booking/use-case/UpdateBookingUseCase";


export function makeBookingController() {
    const repository = new PrismaBookingRepository();

    return new BookingController(
        new CreateBookingUseCase(repository),
        new GetAllBookingsUseCase(repository),
        new GetBookingByIdUseCase(repository),
        new UpdateBookingUseCase(repository),
        new DeleteBookingUseCase(repository),
        new GetBookingsByClientIdUseCase(repository),
        new GetBookingsBySessionIdUseCase(repository),

    );
}