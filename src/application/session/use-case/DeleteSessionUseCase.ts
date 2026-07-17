import { SessionRepository } from "../domain/SessionRepository";

export class DeleteSessionUseCase {

    constructor(
        private repository: SessionRepository
    ) {}

    async execute(id:number){

        const session = await this.repository.findById(id);

        if(!session){
            throw new Error("Session not found");
        }


        const result = await this.repository.delete(id);
        return result


    }
}