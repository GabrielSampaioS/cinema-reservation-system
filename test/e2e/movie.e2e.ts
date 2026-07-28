import assert from "node:assert";
import request from "supertest";

import { app } from "../setup/app";

import { describe, it } from "node:test";
import { makeMovieData} from "../factories/movie.factory"


describe("Movie E2E", () => {


    it("should create a movie", async () => {

        const movie = makeMovieData();


        const response = await request(app)
            .post("/movie")
            .send(movie)
            .expect(201);


        assert.ok(response.body.idMovie);

        assert.equal(
            response.body.title,
            movie.title
        );

        assert.equal(
            response.body.description,
            movie.description
        );

        assert.ok(response.body.createdAt);

    });



    it("should find movie by id", async () => {


        const movie = makeMovieData();


        const created = await request(app)
            .post("/movie")
            .send(movie)
            .expect(201);



        const response = await request(app)
            .get(`/movie/${created.body.idMovie}`)
            .expect(200);



        assert.equal(
            response.body.idMovie,
            created.body.idMovie
        );


        assert.equal(
            response.body.title,
            movie.title
        );


    });



    it("should update movie", async () => {

        const movie = makeMovieData();

        const created = await request(app)
            .post("/movie")
            .send(movie)
            .expect(201);

        const response = await request(app)
            .patch(`/movie/${created.body.idMovie}`)
            .send({
                title: "Novo Filme"
            })
            .expect(200);

        assert.equal(
            response.body.idMovie,
            created.body.idMovie
        );
        assert.equal(
            response.body.title,
            "Novo Filme"
        );

    });

    it("should delete movie", async () => {

        const movie = makeMovieData();

        const created = await request(app)
            .post("/movie")
            .send(movie)
            .expect(201);

        await request(app)
            .delete(`/movie/${created.body.idMovie}`)
            .expect(204);


        //todo: 
        /*await request(app)
            .get(`/movie/${created.body.idMovie}`)
            .expect(404);
*/

    });


});