import { SessionRepository } from "../../../../application/session/domain/SessionRepository";
import { CreateSessionDTO } from "../../../../application/session/dto/CreateSessionDTO";
import { UpdateSessionDTO } from "../../../../application/session/dto/UpdateSessionDTO";

import { db } from "../db";

import { Session } from "@prisma/client";


export class PrismaSessionRepository implements SessionRepository {


    async create(
        data: CreateSessionDTO
    ): Promise<Session> {

        return db.session.create({
            data
        });
    }


    async findAll(): Promise<Session[]> {

        return db.session.findMany();
    }


    async findById(
        id: number
    ): Promise<Session | null> {

        return db.session.findUnique({
            where: {
                idSession: id
            }
        });
    }


    async findAllByMovieId(
        movieId: number
    ): Promise<Session[]> {

        return db.session.findMany({
            where: {
                movieId
            }
        });
    }


    async findAllByRoomId(
        roomId: number
    ): Promise<Session[]> {

        return db.session.findMany({
            where: {
                roomId
            }
        });
    }


    async update(
        id: number,
        data: UpdateSessionDTO
    ): Promise<Session> {

        return db.session.update({
            where: {
                idSession: id
            },
            data
        });
    }


    async delete(
        id: number
    ): Promise<void> {

        await db.session.delete({
            where: {
                idSession: id
            }
        });
    }

}