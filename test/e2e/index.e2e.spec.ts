import { before, after, beforeEach } from "node:test";
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

import "./client.e2e";
import "./room.e2e";
import "./seat.e2e";
import "./theatre.e2e";
import "./movie.e2e";
import "./session.e2e";
import "./booking.e2e";
