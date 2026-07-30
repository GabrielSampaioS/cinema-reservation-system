import request from "supertest";
import { makeSeatData } from "../factories/seat.factory";
import { app } from "../setup/app";

export async function createSeat(roomId: number) {
    const seat = makeSeatData({ roomId: roomId });

    const response = await request(app).post(`/seat/rooms/${roomId}/seats`).send(seat).expect(201);

    return response.body;
}
