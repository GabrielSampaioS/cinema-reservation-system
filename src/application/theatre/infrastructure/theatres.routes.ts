import express from "express";
import { TheatreController } from "./TheatreController";

export default function theatresRoutes(
    controller: TheatreController

) {
    const router = express.Router();


    router.post("/", controller.create.bind(controller));

    router.get("/", controller.findAll.bind(controller));

    router.get("/:theatreId", controller.findById.bind(controller));

    router.delete("/:theatreId", controller.delete.bind(controller));

    //router.get("/nearby");
    //router.patch("/:theatreId");//
    
    // rooms dentro do theatre
    //router.post("/:theatreId/rooms");
    //router.get("/:theatreId/rooms");

    return router;
}