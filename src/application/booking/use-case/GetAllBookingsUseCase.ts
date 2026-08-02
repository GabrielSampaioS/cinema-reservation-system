import { BookingRepository } from "../domain/BookingRepository";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";
import { BookingMapper } from "../mapper/BoolingMapper";

export class GetAllBookingsUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(): Promise<BookingResponseDTO[]> {
        const result = await this.repository.findAll();

        const bookingMapper = new BookingMapper();

        return bookingMapper.toDTOList(result);
    }
}
