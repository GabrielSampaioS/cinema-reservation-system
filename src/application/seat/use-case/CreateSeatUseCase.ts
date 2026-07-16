import { SeatRepository } from "../domain/SeatRepository";
import { CreateSeatDTO } from "../dto/CreateSeatDTO";

export class CreateSeatUseCase {
    constructor(
        private readonly seatRepository: SeatRepository
    ) { }

    async execute(data: CreateSeatDTO) {
        const result = await this.seatRepository.create(data)
        return result
    }
}