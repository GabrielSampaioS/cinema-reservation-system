import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { UpdateCLientDTO } from "../dto/UpdateClientDTO";

export class UpdateClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async execute(idClient: number, data: UpdateCLientDTO) {

        const clientExists = await this.clientRepository.findById(idClient)
        if (clientExists) {
            throw new NotFoundError(
                "Usuário não localaizado",
                "USER_NOT_FOUND"
            );
        }
        const result = await this.clientRepository.update(idClient, data)
        return result
    }
}