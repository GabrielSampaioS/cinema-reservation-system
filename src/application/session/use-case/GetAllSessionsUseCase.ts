import { SessionRepository } from "../domain/SessionRepository";
import { SessionResponseDTO } from "../dto/SessionResponseDTO";
import { SessionMapper } from "../mapper/SessionMapper";

export class GetAllSessionsUseCase {
    constructor(private repository: SessionRepository) {}

    async execute(): Promise<SessionResponseDTO[]> {
        const result = await this.repository.findAll();

        const sessionMapper = new SessionMapper();
        return sessionMapper.toDTOList(result);
    }
}
