import { ClientRepository } from "../domain/ClientRepository";
import { UpdateCLientDTO } from "../dto/UpdateClientDTO";

export class UpdateClientUseCase{
    constructor(
        private readonly clientRepository : ClientRepository
    ){}

    async execute(idCLient : number, data: UpdateCLientDTO){
        const result = await this.clientRepository.update(idCLient, data)
        return result
    }
}