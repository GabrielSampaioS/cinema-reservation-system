import { BookingRepository } from "../domain/BookingRepository";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";
import { UpdateBookingDTO } from "../dto/UpdateBookingDTO";
import { BookingMapper } from "../mapper/BoolingMapper";

export class UpdateBookingUseCase {
    constructor(private repository: BookingRepository) {}

    async execute(id: number, data: UpdateBookingDTO): Promise<BookingResponseDTO> {
        const result = await this.repository.update(id, data);

        const bookingMapper = new BookingMapper();
        return bookingMapper.toDTO(result);
    }
}
