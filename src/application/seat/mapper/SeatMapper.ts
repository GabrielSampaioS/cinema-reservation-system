import { Seat } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { SeatResponseDTO } from "../dto/SeatResponseDTO";

export class SeatMapper extends BaseMapper<Seat, SeatResponseDTO> {
    toDTO(seat: Seat): SeatResponseDTO {
        return {
            idRoom: seat.roomId,
            row: seat.row,
            number: seat.number,
            idSeat: seat.idSeat,
        };
    }
}
