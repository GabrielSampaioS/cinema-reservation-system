import { TheatreRepository } from "../domain/TheatreRepository";


export class DeleteTheatreUseCase {
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(theatreId: number){



        const result = await this.theatreRepository.delete(theatreId)

        // const result datosDto(theatre)
        // return result
        
        return result

    }

}