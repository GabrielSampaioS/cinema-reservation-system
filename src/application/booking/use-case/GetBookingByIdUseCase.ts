import { BookingRepository } from "../domain/BookingRepository";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";
import { BookingMapper } from "../mapper/BoolingMapper";

export class GetBookingByIdUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(id: number): Promise<BookingResponseDTO> {
        const result = await this.repository.findById(id);

        if (!result) {
            throw new Error("Booking not found");
        }

        const bookingMapper = new BookingMapper();
        return bookingMapper.toDTO(result);
    }
}
