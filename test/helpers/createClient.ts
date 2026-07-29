import request from "supertest";
import { makeClientData } from "../factories/client.factory";
import { app } from "../setup/app";

export async function createClient() {
    const client = makeClientData()

    const response = await request(app)
    .post('/client')
    .send(client)
    .expect(201)

    return response.body
}