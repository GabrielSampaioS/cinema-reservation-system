import { MovieRepository } from "../domain/MovieRepository";
import { UpdateMovieDTO } from "../dto/UpdateMovieDTO";

export class UpdateMovieUseCase{
    constructor(
        private readonly movieRepository : MovieRepository
    ) {}

    async execute(movieId : number, data : UpdateMovieDTO){
        const result = await this.movieRepository.update(movieId, data)
        return result
    }
}

