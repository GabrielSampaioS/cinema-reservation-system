import { ClientRepository } from "../domain/ClientRepository";
import { CreateClientDTO } from "../dto/CreateClientDTO";

export class GetClientByIdClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(idCliente : number){
        const result = await this.clientRepository.findById(idCliente)
        return result
    }
}