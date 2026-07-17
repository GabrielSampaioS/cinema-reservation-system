import { after, before, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import { app } from "../setup/app";
import { cleanDatabase, disconnectDatabase } from "../setup/database";
import { makeTheatreData } from "../factories/theatre.factory";

before(async () => {
  await cleanDatabase();
});

beforeEach(async () => {
  await cleanDatabase();
});

after(async () => {
  await disconnectDatabase();
});

describe("Theatre E2E", () => {

  it("should create a theatre", async () => {

    const theatre = makeTheatreData();

    const response = await request(app)
      .post("/theatre")
      .send(theatre)
      .expect(201);

    assert.ok(response.body.idTheatre);

    assert.equal(response.body.name, theatre.name);
    assert.equal(response.body.latitude, theatre.latitude);
    assert.equal(response.body.longitude, theatre.longitude);

    assert.ok(response.body.createdAt);

  });

  it("should find theatre by id", async () => {

    const theatre = makeTheatreData();

    const created = await request(app)
      .post("/theatre")
      .send(theatre);

    const response = await request(app)
      .get(`/theatre/${created.body.idTheatre}`)
      .expect(200);

    assert.equal(response.body.idTheatre, created.body.idTheatre);

    assert.equal(response.body.name, theatre.name);
    assert.equal(response.body.latitude, theatre.latitude);
    assert.equal(response.body.longitude, theatre.longitude);
    assert.equal(response.body.city, theatre.city);

  });

  it("should list all theatres", async () => {

    const theatre = makeTheatreData();

    await request(app)
      .post("/theatre")
      .send(theatre);

    const response = await request(app)
      .get("/theatre")
      .expect(200);

    assert.ok(Array.isArray(response.body));

    assert.ok(response.body.length > 0);

  });

  it("should delete theatre", async () => {

    const theatre = makeTheatreData();

    const created = await request(app)
      .post("/theatre")
      .send(theatre);

    await request(app)
      .delete(`/theatre/${created.body.idTheatre}`)
      .expect(204);

    // await request(app)
    //   .get(`/theatre/${created.body.idTheatre}`)
    //   .expect(404);

  });

});