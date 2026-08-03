import { SessionRepository } from "../domain/SessionRepository";
import { CreateSessionDTO } from "../dto/CreateSessionDTO";
import { SessionResponseDTO } from "../dto/SessionResponseDTO";
import { SessionMapper } from "../mapper/SessionMapper";

export class CreateSessionUseCase {
    constructor(private repository: SessionRepository) {}

    async execute(data: CreateSessionDTO): Promise<SessionResponseDTO> {
        const result = await this.repository.create(data);

        const sessionMapper = new SessionMapper();
        return sessionMapper.toDTO(result);
    }
}
