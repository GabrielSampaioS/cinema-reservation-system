import { Movie } from "@prisma/client"
import { CreateMovieDTO } from "../dto/CreateMovieDTO";
import { UpdateMovieDTO } from "../dto/UpdateMovieDTO";

export interface MovieRepository {

    create(data: CreateMovieDTO): Promise<Movie>
    findById(id: number): Promise<Movie | null>

    update(id: number, data: UpdateMovieDTO): Promise<Movie>;

    delete(id: number): Promise<void>;
}