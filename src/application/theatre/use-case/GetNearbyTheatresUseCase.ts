import { TheatreRepository } from "../domain/TheatreRepository";
import { TheatreResponseDTO } from "../dto/TheatreResponseDTO";
import { TheatreMapper } from "../mapper/TheatreMapper";

export class GetNearbyTheatresUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(latitude: number, longitude: number): Promise<TheatreResponseDTO[]> {
        const result = await this.theatreRepository.findNearby(latitude, longitude);

        const theatreMapper = new TheatreMapper();
        return theatreMapper.toDTOList(result);
    }
}
