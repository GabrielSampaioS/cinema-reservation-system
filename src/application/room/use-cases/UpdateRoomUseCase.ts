import { RoomRepository } from "../domain/RoomRepository";
import { UpdateRoomDTO } from "../dto/UpdateRoomDTO";

export class UpdateRoomUseCase{
    constructor(
        private readonly roomRepository : RoomRepository
    ) {}

    async execute(roomId : number, data : UpdateRoomDTO){
        const result = await this.roomRepository.update(roomId, data)
    }
}