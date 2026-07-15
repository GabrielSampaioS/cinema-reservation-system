import { TheatreRepository } from "../domain/TheatreRepository";
import { UpdateTheatreDTO } from "../dto/UpdateTheatreDTO";


export class UpdateTheatreUseCase {
    constructor(
        private readonly theatreRepository: TheatreRepository
    ) {}

    async execute(theatreId : number, data : UpdateTheatreDTO){
        //const dadosLimpos = Sanitizer.sanitizar(data)
        //TheatreValidador.validar(dadosLimpos)


        const result = await this.theatreRepository.update(theatreId, data)

        // const result datosDto(theatre)
        // return result
        
        return result

    }

}