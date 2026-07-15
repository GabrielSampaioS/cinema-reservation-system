import { TheatreRepository } from "../domain/TheatreRepository";
import { CreateTheatreDTO } from "../dto/CreateTheatreDTO";


export class CreateTheatreUseCase {
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(data : CreateTheatreDTO){
        //const dadosLimpos = Sanitizer.sanitizar(data)
        //TheatreValidador.validar(dadosLimpos)


        const result = await this.theatreRepository.create(data)

        // const result datosDto(theatre)
        // return result
        
        return result

    }

}