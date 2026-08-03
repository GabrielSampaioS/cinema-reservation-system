import { Room } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { RoomResponseDTO } from "../dto/RoomResponseDTO";

export class RoomMapper extends BaseMapper<Room, RoomResponseDTO> {
    toDTO(room: Room): RoomResponseDTO {
        return {
            idTheatre: room.theatreId,
            idRoom: room.idRoom,
            name: room.name,
        };
    }
}
