import { SeatRepository } from "../domain/SeatRepository";

export class GetSeatByIdUseCase {
    constructor(
        private readonly seatRepository: SeatRepository
    ) { }

    async execute(idseat : number) {
        const result = await this.seatRepository.findById(idseat)
        return result
    }
}