import { ClientRepository } from "../domain/ClientRepository";
import { CreateClientDTO } from "../dto/CreateClientDTO";

export class UpdateClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(idCLient : number, data: CreateClientDTO){
        const result = await this.clientRepository.update(idCLient, data)
        return result
    }
}