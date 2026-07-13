import { RoomRepository } from "../domain/RoomRepository";

export class DeleteRoomUseCase{
    constructor(
        private readonly roomRepository : RoomRepository
    ) {}

    async execute(RoomId : number){
        const result = await this.roomRepository.delete(RoomId)
        return result
    }
}