import { ClientRepository } from "../domain/ClientRepository";

export class DeleteClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(idCliente : number){
        const result = await this.clientRepository.delete(idCliente)
        return result
    }
}