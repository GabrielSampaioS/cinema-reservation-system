import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";
import { ClientMapper } from "../mapper/ClientMapper";

export class GetClientByIdClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(idClient: number): Promise<ClientResponseDTO> {
        const result = await this.clientRepository.findById(idClient);
        if (!result) {
            throw new NotFoundError("Usuário não localaizado", "USER_NOT_FOUND");
        }
        const clientMapper = new ClientMapper();

        return clientMapper.toDTO(result);
    }
}
