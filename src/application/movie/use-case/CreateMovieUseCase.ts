import { MovieRepository } from "../domain/MovieRepository";
import { CreateMovieDTO } from "../dto/CreateMovieDTO";

export class CreatemovieUseCase {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }

    async execute(data: CreateMovieDTO) {
        const result = await this.movieRepository.create(data)
        return result
    }
}