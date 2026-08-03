import { RoomRepository } from "../domain/RoomRepository";
import { CreateRoomDTO } from "../dto/CreateRoomDTO";
import { RoomResponseDTO } from "../dto/RoomResponseDTO";
import { RoomMapper } from "../mapper/RoomMapper";

export class CreateRoomUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(data: CreateRoomDTO): Promise<RoomResponseDTO> {
        const result = await this.roomRepository.create(data);

        const roomMapper = new RoomMapper();
        return roomMapper.toDTO(result);
    }
}
