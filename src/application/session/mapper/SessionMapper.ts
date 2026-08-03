import { Session } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { SessionResponseDTO } from "../dto/SessionResponseDTO";

export class SessionMapper extends BaseMapper<Session, SessionResponseDTO> {
    toDTO(session: Session): SessionResponseDTO {
        return {
            movieId: session.movieId,
            roomId: session.roomId,
            startTime: session.startTime,
            price: Number(session.price),
            idSession: session.idSession,
        };
    }
}
