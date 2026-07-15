import { TheatreRepository } from "../domain/TheatreRepository";

export class GetNearbyTheatresUseCase{
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(latitude : number, longitude : number){
        const result = await this.theatreRepository.findNearby(latitude, longitude)

        return result
    }
}