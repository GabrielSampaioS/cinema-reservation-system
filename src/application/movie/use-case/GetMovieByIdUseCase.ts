import { MovieRepository } from "../domain/MovieRepository";

export class GetMovieByIdUseCase{
    constructor(
        private readonly movieRepository : MovieRepository
    ) {}

    async execute(movieId : number){
        const result = await this.movieRepository.findById(movieId)
        return result
    }
}