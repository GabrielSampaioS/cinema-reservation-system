import { Request, Response } from "express";

import { CreatemovieUseCase } from "../../../application/movie/use-case/CreateMovieUseCase";
import { DeleteMovieUseCase } from "../../../application/movie/use-case/DeleteMovieUseCase";
import { GetMovieByIdUseCase } from "../../../application/movie/use-case/GetMovieByIdUseCase";
import { UpdateMovieUseCase } from "../../../application/movie/use-case/UpdateMovieUseCase";
import { CreateMovieDTO } from "../../../application/movie/dto/CreateMovieDTO";
import { MovieResponseDTO } from "../../../application/movie/dto/MovieResponseDTO";
import { UpdateMovieDTO } from "../../../application/movie/dto/UpdateMovieDTO";

export class MovieController {
    constructor(
        private readonly createmovieUseCase: CreatemovieUseCase,
        private readonly deleteMovieUseCase: DeleteMovieUseCase,
        private readonly getMovieByIdUseCase: GetMovieByIdUseCase,
        private readonly updateMovieUseCase: UpdateMovieUseCase,
    ) {}

    async create(req: Request<{}, {}, CreateMovieDTO>, res: Response<MovieResponseDTO>) {
        const result = await this.createmovieUseCase.execute(req.body);
        return res.status(201).json(result);
    }

    async findByMovieId(req: Request<{ movieId: string }>, res: Response<MovieResponseDTO>) {
        const { movieId } = req.params;

        const result = await this.getMovieByIdUseCase.execute(Number(movieId));

        return res.status(200).json(result);
    }

    async update(
        req: Request<{ movieId: string }, {}, UpdateMovieDTO>,
        res: Response<MovieResponseDTO>,
    ) {
        const { movieId } = req.params;

        const result = await this.updateMovieUseCase.execute(Number(movieId), req.body);

        return res.status(200).json(result);
    }

    async delete(req: Request<{ movieId: string }>, res: Response) {
        const { movieId } = req.params;

        await this.deleteMovieUseCase.execute(Number(movieId));

        return res.sendStatus(204);
    }
}
