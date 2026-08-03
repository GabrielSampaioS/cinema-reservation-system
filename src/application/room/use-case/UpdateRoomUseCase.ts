import { RoomRepository } from "../domain/RoomRepository";
import { RoomResponseDTO } from "../dto/RoomResponseDTO";
import { UpdateRoomDTO } from "../dto/UpdateRoomDTO";
import { RoomMapper } from "../mapper/RoomMapper";

export class UpdateRoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(roomId: number, data: UpdateRoomDTO): Promise<RoomResponseDTO> {
        const result = await this.roomRepository.update(roomId, data);

        const roomMapper = new RoomMapper();
        return roomMapper.toDTO(result);
    }
}
