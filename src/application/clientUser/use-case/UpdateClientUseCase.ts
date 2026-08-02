import { NotFoundError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";
import { UpdateClientDTO } from "../dto/UpdateClientDTO";
import { ClientMapper } from "../mapper/ClientMapper";

export class UpdateClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(idClient: number, data: UpdateClientDTO): Promise<ClientResponseDTO> {
        const clientExists = await this.clientRepository.findById(idClient);
        if (!clientExists) {
            throw new NotFoundError("Usuário não localaizado", "USER_NOT_FOUND");
        }
        const result = await this.clientRepository.update(idClient, data);

        const clientMapper = new ClientMapper();

        return clientMapper.toDTO(result);
    }
}
