import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { MovieRepository } from "../domain/MovieRepository";
import { MovieResponseDTO } from "../dto/MovieResponseDTO";
import { MovieMapper } from "../mapper/MovieMapper";

export class GetMovieByIdUseCase {
    constructor(private readonly movieRepository: MovieRepository) {}

    async execute(movieId: number): Promise<MovieResponseDTO> {
        const result = await this.movieRepository.findById(movieId);

        if (!result) {
            throw new NotFoundError("FIlme não localaizado", "MOVIE_NOT_FOUND");
        }

        const movieMapper = new MovieMapper();

        return movieMapper.toDTO(result);
    }
}
