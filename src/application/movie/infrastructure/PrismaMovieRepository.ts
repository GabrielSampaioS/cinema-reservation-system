import { Movie } from "@prisma/client";
import { MovieRepository } from "../domain/MovieRepository";
import { CreateMovieDTO } from "../dto/CreateMovieDTO";
import { UpdateMovieDTO } from "../dto/UpdateMovieDTO";
import { db } from "../../../infrastructure/database/prisma/db"


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