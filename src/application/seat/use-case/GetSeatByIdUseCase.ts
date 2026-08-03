import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { SeatRepository } from "../domain/SeatRepository";
import { SeatResponseDTO } from "../dto/SeatResponseDTO";
import { SeatMapper } from "../mapper/SeatMapper";

export class GetSeatByIdUseCase {
    constructor(private readonly seatRepository: SeatRepository) {}

    async execute(idseat: number): Promise<SeatResponseDTO> {
        const result = await this.seatRepository.findById(idseat);
        if (!result) {
            throw new NotFoundError("Seat não localaizado", "SEAT_NOT_FOUND");
        }
        const seatMapper = new SeatMapper();
        return seatMapper.toDTO(result);
    }
}
