import { MovieRepository } from "../domain/MovieRepository";
import { MovieResponseDTO } from "../dto/MovieResponseDTO";
import { UpdateMovieDTO } from "../dto/UpdateMovieDTO";
import { MovieMapper } from "../mapper/MovieMapper";

export class UpdateMovieUseCase {
    constructor(private readonly movieRepository: MovieRepository) {}

    async execute(movieId: number, data: UpdateMovieDTO): Promise<MovieResponseDTO> {
        const result = await this.movieRepository.update(movieId, data);
        const movieMapper = new MovieMapper();

        return movieMapper.toDTO(result);
    }
}
