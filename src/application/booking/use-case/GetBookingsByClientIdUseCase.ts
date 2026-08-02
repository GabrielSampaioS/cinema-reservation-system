import { BookingRepository } from "../domain/BookingRepository";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";
import { BookingMapper } from "../mapper/BoolingMapper";

export class GetBookingsByClientIdUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(clientId: number): Promise<BookingResponseDTO[]> {
        const result = await this.repository.findAllByClientId(clientId);

        const bookingMapper = new BookingMapper();
        return bookingMapper.toDTOList(result);
    }
}
