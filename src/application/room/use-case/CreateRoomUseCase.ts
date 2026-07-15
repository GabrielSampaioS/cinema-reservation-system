import { RoomRepository } from "../domain/RoomRepository";
import { CreateRoomDTO } from "../dto/CreateRoomDTO";

export class CreateRoomUseCase {
    constructor(
        private readonly roomRepository: RoomRepository
    ) { }

    async execute(data: CreateRoomDTO) {
        const result = await this.roomRepository.create(data)
        return result
    }
}