import { Movie } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { MovieResponseDTO } from "../dto/MovieResponseDTO";

export class MovieMapper extends BaseMapper<Movie, MovieResponseDTO> {
    toDTO(movie: Movie): MovieResponseDTO {
        return {
            idMovie: movie.idMovie,
            title: movie.title,
            description: movie.description,
            duration: movie.duration,
            createdAt: movie.createdAt,
        };
    }
}
