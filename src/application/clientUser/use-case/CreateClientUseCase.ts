import { ClientRepository } from "../domain/ClientRepository";
import { CreateClientDTO } from "../dto/CreateClientDTO";

export class CreateClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(data: CreateClientDTO){
        const result = await this.clientRepository.create(data)
        return result
    }
}