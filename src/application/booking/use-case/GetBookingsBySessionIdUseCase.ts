import { BookingRepository } from "../domain/BookingRepository";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";
import { BookingMapper } from "../mapper/BoolingMapper";

export class GetBookingsBySessionIdUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(sessionId: number): Promise<BookingResponseDTO[]> {
        const result = await this.repository.findAllBySessionId(sessionId);

        const bookingMapper = new BookingMapper();
        return bookingMapper.toDTOList(result);
    }
}
