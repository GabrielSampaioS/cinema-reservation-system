import { MovieRepository } from "../domain/MovieRepository";
import { CreateMovieDTO } from "../dto/CreateMovieDTO";
import { MovieResponseDTO } from "../dto/MovieResponseDTO";
import { MovieMapper } from "../mapper/MovieMapper";

export class CreatemovieUseCase {
    constructor(private readonly movieRepository: MovieRepository) {}

    async execute(data: CreateMovieDTO): Promise<MovieResponseDTO> {
        const result = await this.movieRepository.create(data);

        const movieMapper = new MovieMapper();

        return movieMapper.toDTO(result);
    }
}
