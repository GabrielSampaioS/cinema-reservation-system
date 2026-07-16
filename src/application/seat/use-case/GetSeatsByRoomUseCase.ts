import { SeatRepository } from "../domain/SeatRepository";

export class GetSeatsByRoomUseCase {
    constructor(
        private readonly seatRepository: SeatRepository
    ) { }

    async execute(idroom : number) {
        const result = await this.seatRepository.findByIdRoom(idroom)
        return result
    }
}