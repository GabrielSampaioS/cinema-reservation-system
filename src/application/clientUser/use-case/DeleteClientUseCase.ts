import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";

export class DeleteClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(clientId: number): Promise<void> {
        const clientExists = await this.clientRepository.findById(clientId);
        if (!clientExists) {
            throw new NotFoundError("Usuário não localaizado", "USER_NOT_FOUND");
        }

        await this.clientRepository.delete(clientId);
    }
}
