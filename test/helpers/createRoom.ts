import request from "supertest";
import { makeRoomData } from "../factories/room.factory";
import { app } from "../setup/app";

export async function createRoom(
    idTheatre : number
) {
    const room = makeRoomData({theatreId : idTheatre})

    const response = await request(app)
    .post('/room')
    .send(room)
    .expect(201)

    return response.body
}