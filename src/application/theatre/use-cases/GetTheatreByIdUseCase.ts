import { TheatreRepository } from "../domain/TheatreRepository";

export class GetTheatreByIdUseCase{
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(theatreId: number){
        const result = await this.theatreRepository.findById(theatreId)

        return result
    }
}