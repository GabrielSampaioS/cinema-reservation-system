import assert from "node:assert";
import request from "supertest";

import { app } from "../setup/app";
import { makeRoomData } from "../factories/room.factory";
import { makeTheatreData } from "../factories/theatre.factory";
import { after, before, beforeEach, describe, it } from "node:test";
import { cleanDatabase, disconnectDatabase } from "../setup/database";

before(async () => {
  await cleanDatabase();
});

beforeEach(async () => {
  await cleanDatabase();
});

after(async () => {
  await disconnectDatabase();
});

describe("Room E2E", () => {


    it("should create a room", async () => {

        const theatre = makeTheatreData();

        const createdTheatre = await request(app)
            .post("/theatre")
            .send(theatre);


        const room = makeRoomData({
            theatreId: createdTheatre.body.idTheatre
        });


        const response = await request(app)
            .post("/room")
            .send(room)
            .expect(201);


        assert.ok(response.body.idRoom);

        assert.equal(response.body.name, room.name);


    });



    it("should find room by id", async () => {

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



        const response = await request(app)
            .get(`/room/${createdRoom.body.idRoom}`)
            .expect(200);



        assert.equal(
            response.body.idRoom,
            createdRoom.body.idRoom
        );


        assert.equal(
            response.body.name,
            room.name
        );


    });



    it("should update room", async () => {

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



        const response = await request(app)
            .patch(`/room/${createdRoom.body.idRoom}`)
            .send({
                name: "Sala Premium"
            })
            .expect(200);



        assert.equal(
            response.body.name,
            "Sala Premium"
        );


        assert.equal(
            response.body.idRoom,
            createdRoom.body.idRoom
        );

    });



    it("should delete room", async () => {

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



        await request(app)
            .delete(`/room/${createdRoom.body.idRoom}`)
            .expect(204);


    });


});