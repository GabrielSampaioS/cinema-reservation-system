import { SeatRepository } from "../domain/SeatRepository";

export class DeleteSeatUseCase {
    constructor(private readonly seatRepository: SeatRepository) {}

    async execute(idseat: number) {
        await this.seatRepository.delete(idseat);
    }
}
