import { TheatreRepository } from "../domain/TheatreRepository";

export class DeleteTheatreUseCase {
    constructor(private readonly theatreRepository: TheatreRepository) {}

    async execute(theatreId: number) {
        await this.theatreRepository.delete(theatreId);
    }
}
