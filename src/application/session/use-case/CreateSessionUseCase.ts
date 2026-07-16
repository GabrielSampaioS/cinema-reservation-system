import { SessionRepository } from "../domain/SessionRepository";
import { CreateSessionDTO } from "../dto/CreateSessionDTO";

export class CreateSessionUseCase {

    constructor(
        private repository: SessionRepository
    ) {}

    async execute(data: CreateSessionDTO) {

        return this.repository.create(data);

    }
}