import express from "express";
import { TheatreController } from "../controllers/TheatreController";

export default function theatresRoutes(
    controller: TheatreController

) {
    const router = express.Router();
    

    router.post("/", controller.create.bind(controller));

    /*router.get("/");
    router.get("/nearby");

    router.get("/:theatreId");
    router.patch("/:theatreId");
    router.delete("/:theatreId");

    // rooms dentro do theatre
    router.post("/:theatreId/rooms");
    router.get("/:theatreId/rooms");*/

    return router;
}