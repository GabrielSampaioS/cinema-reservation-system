import { SessionRepository } from "../domain/SessionRepository";

export class GetAllSessionsUseCase {

    constructor(
        private repository: SessionRepository
    ) {}

    async execute() {

        return this.repository.findAll();

    }
}