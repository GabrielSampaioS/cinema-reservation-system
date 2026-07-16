import { Request, Response } from "express";

import { CreateSessionUseCase } from "../../../application/session/use-case/CreateSessionUseCase";
import { GetAllSessionsUseCase } from "../../../application/session/use-case/GetAllSessionsUseCase";
import { GetSessionByIdUseCase } from "../../../application/session/use-case/GetSessionByIdUseCase";
import { UpdateSessionUseCase } from "../../../application/session/use-case/UpdateSessionUseCase";
import { DeleteSessionUseCase } from "../../../application/session/use-case/DeleteSessionUseCase";

import { GetSessionsByMovieIdUseCase } from "../../../application/session/use-case/GetSessionsByMovieIdUseCase";


export class SessionController {

    constructor(
        private readonly createSessionUseCase: CreateSessionUseCase,
        private readonly getAllSessionsUseCase: GetAllSessionsUseCase,
        private readonly getSessionByIdUseCase: GetSessionByIdUseCase,
        private readonly updateSessionUseCase: UpdateSessionUseCase,
        private readonly deleteSessionUseCase: DeleteSessionUseCase,
        private readonly getSessionsByMovieIdUseCase: GetSessionsByMovieIdUseCase,
    ) {}


    async create(req: Request, res: Response) {

        const session = await this.createSessionUseCase.execute(
            req.body
        );

        return res.status(201).json(session);
    }


    async findAll(req: Request, res: Response) {

        const sessions = await this.getAllSessionsUseCase.execute();

        return res.status(200).json(sessions);
    }


    async findById(req: Request, res: Response) {

        const { sessionId } = req.params;

        const session = await this.getSessionByIdUseCase.execute(
            Number(sessionId)
        );

        return res.status(200).json(session);
    }


    async update(req: Request, res: Response) {

        const { sessionId } = req.params;

        const session = await this.updateSessionUseCase.execute(
            Number(sessionId),
            req.body
        );

        return res.status(200).json(session);
    }


    async delete(req: Request, res: Response) {

        const { sessionId } = req.params;

        await this.deleteSessionUseCase.execute(
            Number(sessionId)
        );

        return res.sendStatus(204);
    }


    async findByMovieId(req: Request, res: Response) {

        const { movieId } = req.params;

        const sessions = await this.getSessionsByMovieIdUseCase.execute(
            Number(movieId)
        );

        return res.status(200).json(sessions);
    }

}