import { after, before, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import { app } from "../setup/app";
import { cleanDatabase, disconnectDatabase } from "../setup/database";
import { makeClientData } from "../factories/client.factory";

before(async () => {
  await cleanDatabase();
});

beforeEach(async () => {
  await cleanDatabase();
});

after(async () => {
  await disconnectDatabase();
});

describe("Client E2E", () => {

  it("should create a client", async () => {

    const client = makeClientData();

    const response = await request(app)
      .post("/client")
      .send(client)
      .expect(201);

    assert.ok(response.body.idClient);

    assert.equal(response.body.name, client.name);
    assert.equal(response.body.email, client.email);

    assert.ok(response.body.createdAt);

  });

  it("should find client by id", async () => {

    const client = makeClientData();

    const created = await request(app)
      .post("/client")
      .send(client);

    const response = await request(app)
      .get(`/client/${created.body.idClient}`)
      .expect(200);

    assert.equal(response.body.idClient, created.body.idClient);

    assert.equal(response.body.name, client.name);

    assert.equal(response.body.email, client.email);

  });

  it("should update client", async () => {

    const client = makeClientData();

    const created = await request(app)
      .post("/client")
      .send(client);

    const response = await request(app)
      .patch(`/client/${created.body.idClient}`)
      .send({
        name: "João Pedro"
      })
      .expect(200);

    assert.equal(response.body.name, "João Pedro");

    assert.equal(response.body.idClient, created.body.idClient);

  });

  it("should delete client", async () => {

    const client = makeClientData();

    const created = await request(app)
      .post("/client")
      .send(client);

    await request(app)
      .delete(`/client/${created.body.idClient}`)
      .expect(204);

    //await request(app)
    //.get(`/client/${created.body.idClient}`)
    //.expect(404);

  });

})