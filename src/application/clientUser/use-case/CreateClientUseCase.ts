import { ConflictError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";
import { CreateClientDTO } from "../dto/CreateClientDTO";
import { ClientMapper } from "../mapper/ClientMapper";

export class CreateClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(data: CreateClientDTO): Promise<ClientResponseDTO> {
        //jogra isso na class CLeint e o constyutor chmama ?
        const clientExists = await this.clientRepository.findByEmail(data.email);

        if (clientExists) {
            throw new ConflictError("Email já cadastrado", "EMAIL_ALREADY_EXISTS");
        }
        const result = await this.clientRepository.create(data);

        //TODO: injetar dependedncia ao invez de instanciar a class
        const clientMapper = new ClientMapper();

        return clientMapper.toDTO(result);
    }
}
