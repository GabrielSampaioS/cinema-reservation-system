import { SeatRepository } from "../domain/SeatRepository";
import { SeatResponseDTO } from "../dto/SeatResponseDTO";
import { UpdateSeatDTO } from "../dto/UpdateSeatDTO";
import { SeatMapper } from "../mapper/SeatMapper";

export class UpdateSeatUseCase {
    constructor(private readonly seatRepository: SeatRepository) {}

    async execute(idseat: number, data: UpdateSeatDTO): Promise<SeatResponseDTO> {
        const result = await this.seatRepository.update(idseat, data);
        const seatMapper = new SeatMapper();
        return seatMapper.toDTO(result);
    }
}
