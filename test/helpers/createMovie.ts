import request from "supertest";
import { makeMovieData } from "../factories/movie.factory";
import { app } from "../setup/app";

export async function createMovie() {
    const movie = makeMovieData();

    const response = await request(app).post("/movie").send(movie).expect(201);

    return response.body;
}
