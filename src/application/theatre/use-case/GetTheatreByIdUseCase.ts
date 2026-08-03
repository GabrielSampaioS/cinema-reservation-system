import { TheatreRepository } from "../domain/TheatreRepository";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";
import { TheatreMapper } from "../mapper/TheatreMapper";

export class GetTheatreByIdUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(theatreId: number): Promise<TheatreResponseDTO> {
        const result = await this.theatreRepository.findById(theatreId);

        if (!result) {
            throw new Error("theatre not found");
        }

        const theatreMapper = new TheatreMapper();
        return theatreMapper.toDTO(result);
    }
}
