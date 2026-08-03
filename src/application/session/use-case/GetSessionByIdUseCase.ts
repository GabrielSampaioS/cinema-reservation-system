import { SessionRepository } from "../domain/SessionRepository";
import { SessionResponseDTO } from "../dto/SessionResponseDTO";
import { SessionMapper } from "../mapper/SessionMapper";

export class GetSessionByIdUseCase {
    constructor(private repository: SessionRepository) {}

    async execute(id: number): Promise<SessionResponseDTO> {
        const result = await this.repository.findById(id);

        if (!result) {
            throw new Error("Session not found");
        }

        const sessionMapper = new SessionMapper();
        return sessionMapper.toDTO(result);
    }
}
