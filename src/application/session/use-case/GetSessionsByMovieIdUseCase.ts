import { SessionRepository } from "../domain/SessionRepository";

export class GetSessionsByMovieIdUseCase {

    constructor(
        private repository: SessionRepository
    ) {}

    async execute(id:number) {

        const session = await this.repository.findAllByMovieId(id);

        if(!session){
            throw new Error("Session not found");
        }

        return session;
    }
}