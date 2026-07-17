import { ClientRepository } from "../domain/ClientRepository";

export class GetClientByIdClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(idCliente : number){
        const result = await this.clientRepository.findById(idCliente)
        return result
    }
}