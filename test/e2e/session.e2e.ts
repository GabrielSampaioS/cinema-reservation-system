import assert from "node:assert";
import request from "supertest";

import { app } from "../setup/app";
import { makeRoomData } from "../factories/room.factory";
import { makeMovieData } from "../factories/movie.factory";
import { makeTheatreData } from "../factories/theatre.factory";
import { after, before, beforeEach, describe, it } from "node:test";
import { cleanDatabase, disconnectDatabase } from "../setup/database";
import { makeSessionData } from "../factories/session.factory";

before(async () => {
  await cleanDatabase();
});

beforeEach(async () => {
  await cleanDatabase();
});

after(async () => {
  await disconnectDatabase();
});


async function createMovie() {

    const movie = makeMovieData();

    const response = await request(app)
        .post("/movie")
        .send(movie)
        .expect(201);

    return response.body.idMovie;
}

async function createRoom() {

    const theatre = makeTheatreData();

    const createdTheatre = await request(app)
        .post("/theatre")
        .send(theatre)
        .expect(201);

    const room = makeRoomData({
        theatreId: createdTheatre.body.idTheatre
    });

    const createdRoom = await request(app)
        .post("/room")
        .send(room)
        .expect(201);

    return createdRoom.body.idRoom;
}

describe("Session E2E", () => {

    it("should create a session", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        const response = await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        assert.ok(response.body.idSession);

        assert.equal(
            response.body.movieId,
            movieId
        );

        assert.equal(
            response.body.roomId,
            roomId
        );

        assert.ok(response.body.createdAt);

    });



    it("should list all sessions", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        const response = await request(app)
            .get("/session")
            .expect(200);

        assert.ok(Array.isArray(response.body));


        assert.equal(
            response.body.length,
            1
        );
        assert.equal(
            response.body[0].movieId,
            movieId
        );
    });



    it("should find session by id", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        const created = await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        const response = await request(app)
            .get(`/session/${created.body.idSession}`)
            .expect(200);

        assert.equal(
            response.body.idSession,
            created.body.idSession
        );
    });



    it("should update session", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        const created = await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        const response = await request(app)
            .patch(`/session/${created.body.idSession}`)
            .send({
                startTime: new Date("2026-07-20T20:00:00")
            })
            .expect(200);

        assert.equal(
            response.body.idSession,
            created.body.idSession
        );


    });



    it("should delete session", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        const created = await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        await request(app)
            .delete(`/session/${created.body.idSession}`)
            .expect(204);

    });



    it("should list sessions by movie", async () => {

        const movieId = await createMovie();

        const roomId = await createRoom();

        const session = makeSessionData(
            movieId,
            roomId,
            10
        );

        await request(app)
            .post("/session")
            .send(session)
            .expect(201);

        const response = await request(app)
            .get(`/session/movie/${movieId}`)
            .expect(200);

        assert.ok(Array.isArray(response.body));

        assert.equal(
            response.body.length,
            1
        );

        assert.equal(
            response.body[0].movieId,
            movieId
        );

    });

});

