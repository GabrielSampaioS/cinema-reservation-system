import { SeatRepository } from "../domain/SeatRepository";
import { CreateSeatDTO } from "../dto/CreateSeatDTO";
import { SeatResponseDTO } from "../dto/SeatResponseDTO";
import { SeatMapper } from "../mapper/SeatMapper";

export class CreateSeatUseCase {
    constructor(private readonly seatRepository: SeatRepository) {}

    async execute(data: CreateSeatDTO): Promise<SeatResponseDTO> {
        const result = await this.seatRepository.create(data);
        const seatMapper = new SeatMapper();
        return seatMapper.toDTO(result);
    }
}
