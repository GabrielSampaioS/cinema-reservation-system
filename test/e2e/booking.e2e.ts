import { after, before, beforeEach, describe, it } from "node:test";
import { cleanDatabase, disconnectDatabase } from "../setup/database";
import assert from "node:assert/strict";
import request from "supertest";

import { app } from "../setup/app";
import { makeBookingData } from "../factories/booking.factory";
import { createClient } from "../helpers/createClient";
import { createRoom } from "../helpers/createRoom";
import { createMovie } from "../helpers/createMovie";
import { createSession } from "../helpers/createSession";
import { createTheatre } from "../helpers/createTheatre";
import { createSeat } from "../helpers/createSeat";


async function createBooking() {

    const client = await createClient();

    const theatre = await createTheatre()

    const movie = await createMovie();

    const room = await createRoom(theatre.idTheatre);

    const session = await createSession(movie.idMovie, room.idRoom);

    const seat = await createSeat(room.idRoom);

    const booking = makeBookingData(
        {
            clientId: client.idClient,
            sessionId: session.idSession,
            seatId: seat.idSeat
        }
    );

    const response = await request(app)
        .post("/booking")
        .send(booking)
        .expect(201);


    return response.body;

}


describe("Booking E2E", () => {

    it("should create a booking", async () => {

        const booking = await createBooking();

        assert.ok(booking.idBooking);
        assert.ok(booking.createdAt);

    });


    it("should list bookings", async () => {

        await createBooking();

        const response = await request(app)
            .get("/booking")
            .expect(200);

        assert.ok(Array.isArray(response.body));

        assert.equal(
            response.body.length,
            1
        );

    });


    it("should find booking by id", async () => {

        const booking = await createBooking();

        const response = await request(app)
            .get(`/booking/${booking.idBooking}`)
            .expect(200);

        assert.equal(
            response.body.idBooking,
            booking.idBooking
        );

    });


    it("should update booking", async () => {

        const booking = await createBooking();

        const response = await request(app)
            .patch(`/booking/${booking.idBooking}`)
            .send({
                statusId: 2
            })
            .expect(200);

        assert.equal(
            response.body.statusId,
            2
        );

    });


    it("should delete booking", async () => {

        const booking = await createBooking();

        await request(app)
            .delete(`/booking/${booking.idBooking}`)
            .expect(204);

    });


    it("should list bookings by client", async () => {

        const booking = await createBooking();

        const response = await request(app)
            .get(`/booking/client/${booking.clientId}`)
            .expect(200);

        assert.ok(Array.isArray(response.body));

        assert.equal(
            response.body.length,
            1
        );

        assert.equal(
            response.body[0].clientId,
            booking.clientId
        );

    });


    it("should list bookings by session", async () => {

        const booking = await createBooking();

        const response = await request(app)
            .get(`/booking/session/${booking.sessionId}`)
            .expect(200);

        assert.ok(Array.isArray(response.body));

        assert.equal(
            response.body.length,
            1
        );

        assert.equal(
            response.body[0].sessionId,
            booking.sessionId
        );

    });

});



