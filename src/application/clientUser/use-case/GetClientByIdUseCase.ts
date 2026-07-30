import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";

export class GetClientByIdClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(idClient: number): Promise<ClientResponseDTO> {
        const result = await this.clientRepository.findById(idClient);
        if (!result) {
            throw new NotFoundError("Usuário não localaizado", "USER_NOT_FOUND");
        }
        return {
            idClient: result.idClient,
            name: result.name,
            email: result.email,
            createdAt: result.createdAt,
        };
    }
}
