import { PrismaMovierepository } from "../../application/movie/infrastructure/PrismaMovieRepository";

import {MovieController} from "../../application/movie/infrastructure/MovieController"

import { CreatemovieUseCase   } from "../../application/movie/use-case/CreateMovieUseCase";
import { DeleteMovieUseCase } from "../../application/movie/use-case/DeleteMovieUseCase";
import { GetMovieByIdUseCase } from "../../application/movie/use-case/GetMovieByIdUseCase";
import { UpdateMovieUseCase } from "../../application/movie/use-case/UpdateMovieUseCase";

export function makeMovieController() {
    const repository = new PrismaMovierepository();

    return new MovieController(
        new CreatemovieUseCase(repository),
        new DeleteMovieUseCase(repository),
        new GetMovieByIdUseCase(repository),
        new UpdateMovieUseCase(repository),
    );
}