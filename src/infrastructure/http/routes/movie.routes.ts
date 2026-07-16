import express  from "express";
import {MovieController} from "../controllers/MovieController"


export default function moviesRoutes(controller : MovieController) {
    const router = express.Router();

    router.get("/:movieId", controller.findByMovieId.bind(controller));
    router.post("/", controller.create.bind(controller));
    //router.get("/");

    router.patch("/:movieId", controller.update.bind(controller));
    router.delete("/:movieId", controller.delete.bind(controller));

    return router;
}