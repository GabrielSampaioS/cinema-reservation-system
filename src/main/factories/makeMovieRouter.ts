import { PrismaMovierepository } from "../../infrastructure/database/prisma/repositories/PrismaMovieRepository";

import { MovieController } from "../../infrastructure/http/controllers/MovieController"

import { CreatemovieUseCase } from "../../application/movie/use-case/CreateMovieUseCase";
import { DeleteMovieUseCase } from "../../application/movie/use-case/DeleteMovieUseCase";
import { GetMovieByIdUseCase } from "../../application/movie/use-case/GetMovieByIdUseCase";
import { UpdateMovieUseCase } from "../../application/movie/use-case/UpdateMovieUseCase";
import moviesRoutes from "../../infrastructure/http/routes/movie.routes";

export function makeMovieRouter() {
    const repository = new PrismaMovierepository();

    const controller = new MovieController(
        new CreatemovieUseCase(repository),
        new DeleteMovieUseCase(repository),
        new GetMovieByIdUseCase(repository),
        new UpdateMovieUseCase(repository),
    );

    return moviesRoutes(controller);

}