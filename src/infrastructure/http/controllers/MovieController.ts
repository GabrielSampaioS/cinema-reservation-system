import { Request, Response } from "express";


import { CreatemovieUseCase } from "../../../application/movie/use-case/CreateMovieUseCase";
import { DeleteMovieUseCase } from "../../../application/movie/use-case/DeleteMovieUseCase";
import { GetMovieByIdUseCase } from "../../../application/movie/use-case/GetMovieByIdUseCase";
import { UpdateMovieUseCase } from "../../../application/movie/use-case/UpdateMovieUseCase";

export class MovieController {
    constructor(
        private readonly createmovieUseCase: CreatemovieUseCase,
        private readonly deleteMovieUseCase: DeleteMovieUseCase,
        private readonly getMovieByIdUseCase: GetMovieByIdUseCase,
        private readonly updateMovieUseCase: UpdateMovieUseCase,
    ) { }

    async create(req: Request, res: Response) {
        const result = await this.createmovieUseCase.execute(req.body)
        return res.status(201).json(result);
    }

    async findByMovieId(req: Request, res: Response) {
        const { movieId } = req.params;

        const result = await this.getMovieByIdUseCase.execute(Number(movieId));

        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const { movieId } = req.params;

        const result = await this.updateMovieUseCase.execute(
            Number(movieId),
            req.body
        );

        return res.status(200).json(result);
    }

    async delete(req: Request, res: Response) {
        const { movieId } = req.params;

        await this.deleteMovieUseCase.execute(Number(movieId));

        return res.sendStatus(204);
    }

}