import { ConflictError } from "../../../middlewares/MiddlewareError";
import { ClientRepository } from "../domain/ClientRepository";
import { CreateClientDTO } from "../dto/CreateClientDTO";

export class CreateClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }

    async execute(data: CreateClientDTO) {

        //jogra isso na class CLeint e o constyutor chmama ?
        const clientExists = await this.clientRepository.findByEmail(data.email)
        if (clientExists) {
            throw new ConflictError(
                "Email já cadastrado",
                "EMAIL_ALREADY_EXISTS"
            );

        }
        const result = await this.clientRepository.create(data)
        return result
    }
}