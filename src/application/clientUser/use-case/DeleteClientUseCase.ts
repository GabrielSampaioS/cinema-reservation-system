import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";

export class DeleteClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async execute(idClient: number) {

        const clientExists = await this.clientRepository.findById(idClient)
        if (clientExists) {
            throw new NotFoundError(
                "Usuário não localaizado",
                "USER_NOT_FOUND"
            );
        }

        const result = await this.clientRepository.delete(idClient)
        return result
    }
}