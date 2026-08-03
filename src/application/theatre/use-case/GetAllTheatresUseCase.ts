import { TheatreRepository } from "../domain/TheatreRepository";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";
import { TheatreMapper } from "../mapper/TheatreMapper";

export class GetAllTheatresUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(): Promise<TheatreResponseDTO[]> {
        const result = await this.theatreRepository.findAll();

        const theatreMapper = new TheatreMapper();
        return theatreMapper.toDTOList(result);
    }
}
