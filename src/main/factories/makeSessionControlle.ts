import { PrismaSessionRepository } from "../../infrastructure/database/prisma/repositories/PrismaSessionRepository";

import { SessionController } from "../../infrastructure/http/controllers/SessionController"

import { CreateSessionUseCase } from "../../application/session/use-case/CreateSessionUseCase";
import { DeleteSessionUseCase } from "../../application/session/use-case/DeleteSessionUseCase";
import { GetAllSessionsUseCase } from "../../application/session/use-case/GetAllSessionsUseCase";
import { GetSessionByIdUseCase } from "../../application/session/use-case/GetSessionByIdUseCase";
import { GetSessionsByMovieIdUseCase } from "../../application/session/use-case/GetSessionsByMovieIdUseCase";
import { UpdateSessionUseCase } from "../../application/session/use-case/UpdateSessionUseCase";


export function makeSessioController() {
    const repository = new PrismaSessionRepository();

    return new SessionController(
        new CreateSessionUseCase(repository),
        new GetAllSessionsUseCase(repository),
        new GetSessionByIdUseCase(repository),
        new UpdateSessionUseCase(repository),
        new DeleteSessionUseCase(repository),
        new GetSessionsByMovieIdUseCase(repository),
    );

}