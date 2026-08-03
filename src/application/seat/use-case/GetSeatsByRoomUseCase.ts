import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { SeatRepository } from "../domain/SeatRepository";
import { SeatResponseDTO } from "../dto/SeatResponseDTO";
import { SeatMapper } from "../mapper/SeatMapper";

export class GetSeatsByRoomUseCase {
    constructor(private readonly seatRepository: SeatRepository) {}

    async execute(idroom: number): Promise<SeatResponseDTO[]> {
        const result = await this.seatRepository.findByIdRoom(idroom);
        if (!result) {
            throw new NotFoundError("SEAT não localaizado", "SEAT_NOT_FOUND");
        }
        const seatMapper = new SeatMapper();
        return seatMapper.toDTOList(result);
    }
}
