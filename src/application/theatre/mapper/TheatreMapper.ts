import { Theatre } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";

export class TheatreMapper extends BaseMapper<Theatre, TheatreResponseDTO> {
    toDTO(theatre: Theatre): TheatreResponseDTO {
        return {
            idTheatre: theatre.idTheatre,
            name: theatre.name,
            address: theatre.address,
            city: theatre.city,
            state: theatre.state,
        };
    }
}
