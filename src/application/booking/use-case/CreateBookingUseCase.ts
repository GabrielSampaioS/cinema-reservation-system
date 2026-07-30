import { BookingRepository } from "../domain/BookingRepository";
import { CreateBookingDTO } from "../dto/CreateBookingDTO";

export class CreateBookingUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(data: CreateBookingDTO) {
        const booking: CreateBookingDTO = {
            clientId: Number(data.clientId),
            sessionId: data.sessionId,
            seatId: data.seatId,
            statusId: 1,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        };

        const result = await this.repository.create(booking);

        return result;
    }
}
