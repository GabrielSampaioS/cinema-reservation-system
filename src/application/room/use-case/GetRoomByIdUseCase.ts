import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { RoomRepository } from "../domain/RoomRepository";
import { RoomResponseDTO } from "../dto/RoomResponseDTO";
import { RoomMapper } from "../mapper/RoomMapper";

export class GetRoomByIdUseCase {
    constructor(private readonly roomRepository: RoomRepository) {}

    async execute(roomId: number): Promise<RoomResponseDTO> {
        const result = await this.roomRepository.findById(roomId);
        if (!result) {
            throw new NotFoundError("Room não localaizado", "ROOM_NOT_FOUND");
        }

        const roomMapper = new RoomMapper();
        return roomMapper.toDTO(result);
    }
}
