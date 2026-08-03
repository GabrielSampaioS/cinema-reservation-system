import { TheatreRepository } from "../domain/TheatreRepository";
import { CreateTheatreDTO } from "../dto/CreateTheatreDTO";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";
import { TheatreMapper } from "../mapper/TheatreMapper";

export class CreateTheatreUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(data: CreateTheatreDTO): Promise<TheatreResponseDTO> {
        //const dadosLimpos = Sanitizer.sanitizar(data)
        //TheatreValidador.validar(dadosLimpos)

        const result = await this.theatreRepository.create(data);

        const theatreMapper = new TheatreMapper();
        return theatreMapper.toDTO(result);
    }
}
