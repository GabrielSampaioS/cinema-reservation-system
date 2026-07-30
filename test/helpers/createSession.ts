import request from "supertest";
import { makeSessionData } from "../factories/session.factory";
import { app } from "../setup/app";

export async function createSession(movieId: number, roomId: number) {
    const session = makeSessionData({ movieId: movieId, roomId: roomId });

    const response = await request(app).post("/session").send(session).expect(201);

    return response.body;
}
