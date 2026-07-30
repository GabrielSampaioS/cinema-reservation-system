import request from "supertest";
import { app } from "../setup/app";
import { makeTheatreData } from "../factories/theatre.factory";

export async function createTheatre() {
    const theatre = makeTheatreData();

    const response = await request(app).post("/theatre").send(theatre).expect(201);

    return response.body;
}
