import express from "express";
import { RoomController } from "./RoomController";

export default function roomsRoutes(
    controller: RoomController
) {

    const router = express.Router();

    router.get("/:roomId", controller.findByRoomId.bind(controller));
    router.patch("/:roomId", controller.update.bind(controller));
    router.delete("/:roomId", controller.delete.bind(controller));
    router.post("/", controller.create.bind(controller))


    return router;
}