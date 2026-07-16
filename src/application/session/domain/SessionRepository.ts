import { Session } from "@prisma/client";

import { CreateSessionDTO } from "../dto/CreateSessionDTO";
import { UpdateSessionDTO } from "../dto/UpdateSessionDTO";


export interface SessionRepository {

    create(data: CreateSessionDTO): Promise<Session>;


    findAll(): Promise<Session[]>;


    findById(id: number): Promise<Session | null>;


    findAllByMovieId(movieId: number): Promise<Session[]>;

    update(id: number, data: UpdateSessionDTO): Promise<Session>;


    delete(id: number): Promise<void>;

}