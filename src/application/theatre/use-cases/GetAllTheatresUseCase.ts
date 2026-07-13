import { TheatreRepository } from "../domain/TheatreRepository";

export class GetAllTheatresUseCase{
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(){
        const result = await this.theatreRepository.findAll()

        return result
    }
}