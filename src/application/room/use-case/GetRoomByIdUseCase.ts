import { RoomRepository } from "../domain/RoomRepository";

export class GetRoomByIdUseCase{
    constructor(
        private readonly roomRepository : RoomRepository
    ) {}

    async execute(roomId : number){
        const result = await this.roomRepository.findById(roomId)
        return result
    }
}