import { MovieRepository } from "../domain/MovieRepository";

export class DeleteMovieUseCase {
    constructor(private readonly movieRepository: MovieRepository) {}

    async execute(RoomId: number) {
        await this.movieRepository.delete(RoomId);
    }
}
