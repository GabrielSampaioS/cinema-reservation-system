import { TheatreRepository } from "../../../domain/repositories/TheatreRepository";
import { CreateTheatreDTO } from "../dto/CreateTheatreDTO";


export class CreateTheatreUseCase {
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(data : CreateTheatreDTO){
        //const dadosLimpos = Sanitizer.sanitizar(data)
        //TheatreValidador.validar(dadosLimpos)


        const theatre = await this.theatreRepository.create(data)

        // const retoranr datosDto(theatre)
        // retirn retonar
        
        return theatre

    }

}