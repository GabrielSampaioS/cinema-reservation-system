import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";

export class GetClientByIdClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async execute(idClient: number) {

        const result = await this.clientRepository.findById(idClient)
        if (result) {
            throw new NotFoundError(
                "Usuário não localaizado",
                "USER_NOT_FOUND"
            );
        }
        return result
    }
}