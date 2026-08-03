import { RoomRepository } from "../domain/RoomRepository";

export class DeleteRoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(RoomId: number) {
        await this.roomRepository.delete(RoomId);
    }
}
