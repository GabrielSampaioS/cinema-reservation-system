import { Movie } from "@prisma/client";
import { MovieRepository } from "../../../../application/movie/domain/MovieRepository";
import { CreateMovieDTO } from "../../../../application/movie/dto/CreateMovieDTO";
import { UpdateMovieDTO } from "../../../../application/movie/dto/UpdateMovieDTO";
import { db } from "../db"


export class PrismaMovierepository implements MovieRepository {
    create(data: CreateMovieDTO): Promise<Movie> {
        return db.movie.create({
            data
        });
    }
    findById(id: number): Promise<Movie | null> {
        return db.movie.findUnique({
            where: {
                idMovie: id
            }
        });
    }
    update(id: number, data: UpdateMovieDTO): Promise<Movie> {
        return db.movie.update({
            where: {
                idMovie: id
            },
            data
        });
    }
    async delete(id: number): Promise<void> {
        await db.movie.delete({
            where: {
                idMovie: id
            }
        });
    }
}