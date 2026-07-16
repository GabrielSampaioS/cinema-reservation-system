import { SeatRepository } from "../domain/SeatRepository";

export class DeleteSeatUseCase {
    constructor(
        private readonly seatRepository: SeatRepository
    ) { }

    async execute(idseat : number) {
        const result = await this.seatRepository.delete(idseat)
        return result
    }
}