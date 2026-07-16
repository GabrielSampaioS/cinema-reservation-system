import { SessionRepository } from "../domain/SessionRepository";
import { UpdateSessionDTO } from "../dto/UpdateSessionDTO";

export class UpdateSessionUseCase {

    constructor(
        private repository: SessionRepository
    ) {}

    async execute(
        id:number,
        data:UpdateSessionDTO
    ){

        const session = await this.repository.findById(id);

        if(!session){
            throw new Error("Session not found");
        }


        return this.repository.update(
            id,
            data
        );
    }
}