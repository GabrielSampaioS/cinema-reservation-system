import { after, before, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import { app } from "../setup/app";
import { cleanDatabase, disconnectDatabase } from "../setup/database";
import { makeTheatreData } from "../factories/theatre.factory";
import { makeRoomData } from "../factories/room.factory";
import { makeSeatData } from "../factories/seat.factory"

before(async () => {
  await cleanDatabase();
});

beforeEach(async () => {
  await cleanDatabase();
});

after(async () => {
  await disconnectDatabase();
});

describe("Seat E2E", () => {

    async function createRoom() {

        const theatre = makeTheatreData();

        const createdTheatre = await request(app)
            .post("/theatre")
            .send(theatre);


        const room = makeRoomData({
            theatreId: createdTheatre.body.idTheatre
        });

        const createdRoom = await request(app)
            .post("/room")
            .send(room);

        return createdRoom.body.idRoom;

    }

    it("should create a seat inside a room", async () => {

        const roomId = await createRoom();

        const seat = makeSeatData({ roomId: roomId });

        const response = await request(app)
            // todo: realziaar rotas alinahdas futuramente
            .post(`/seat/rooms/${roomId}/seats`)
            .send(seat)
            .expect(201);

        assert.ok(response.body.idSeat);

        assert.equal(
            response.body.row,
            seat.row
        );


        assert.equal(
            response.body.number,
            seat.number
        );

    });

    it("should list seats", async () => {
        const roomId = await createRoom();

        const seat = makeSeatData({ roomId: roomId });

        const createdSeat = await request(app)
            .post(`/seat/rooms/${roomId}/seats`)
            .send(seat).expect(201);

        const response = await (request(app))
            .get(`/seat/rooms/${roomId}/seats/`)
            .expect(200)

        assert.ok(Array.isArray(response.body));

        assert.equal(
            response.body.length,
            1
        );

        assert.equal(
            response.body[0].row,
            seat.row
        );


    });

    it("should find seat by id", async () => {

        const roomId = await createRoom();

        const seat = makeSeatData();


        const created = await request(app)
            .post(`/seat/rooms/${roomId}/seats`)
            .send(seat);


        const response = await request(app)
            .get(`/seat/${created.body.idSeat}`)
            .expect(200);

        assert.equal(
            response.body.idSeat,
            created.body.idSeat
        );


    });

    it("should update seat", async () => {

        const roomId = await createRoom();

        const seat = makeSeatData({ roomId: roomId });

        const created = await request(app)
            .post(`/seat/rooms/${roomId}/seats`)
            .send(seat);


        const response = await request(app)
            .patch(`/seat/${created.body.idSeat}`)
            .send({
                row: 2
            })
            .expect(200);



        assert.equal(
            response.body.row,
            2
        );


        assert.equal(
            response.body.idSeat,
            created.body.idSeat
        );


    });

    it("should delete seat", async () => {


        const roomId = await createRoom();


        const seat = makeSeatData({ roomId: roomId });



        const created = await request(app)
            .post(`/seat/rooms/${roomId}/seats`)
            .send(seat);



        await request(app)
            .delete(`/seat/${created.body.idSeat}`)
            .expect(204);


    });


});

