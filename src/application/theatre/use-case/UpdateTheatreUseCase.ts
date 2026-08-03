import { TheatreRepository } from "../domain/TheatreRepository";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";
import { UpdateTheatreDTO } from "../dto/UpdateTheatreDTO";
import { TheatreMapper } from "../mapper/TheatreMapper";

export class UpdateTheatreUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(theatreId: number, data: UpdateTheatreDTO): Promise<TheatreResponseDTO> {
        //const dadosLimpos = Sanitizer.sanitizar(data)
        //TheatreValidador.validar(dadosLimpos)

        const result = await this.theatreRepository.update(theatreId, data);

        // const result datosDto(theatre)
        // return result

        const theatreMapper = new TheatreMapper();
        return theatreMapper.toDTO(result);
    }
}
