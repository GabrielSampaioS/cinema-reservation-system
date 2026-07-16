import { SeatRepository } from "../domain/SeatRepository";
import { UpdateSeatDTO } from "../dto/UpdateSeatDTO";

export class UpdateSeatUseCase {
    constructor(
        private readonly seatRepository: SeatRepository
    ) { }

    async execute(idseat : number ,data: UpdateSeatDTO) {
        const result = await this.seatRepository.update(idseat, data)
        return result
    }
}