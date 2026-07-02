import express from "express";

export default function roomsRoutes() {
    const router = express.Router();

    router.get("/:roomId");
    router.patch("/:roomId");
    router.delete("/:roomId");

    // seats físicos da sala
    router.post("/:roomId/seats");
    router.get("/:roomId/seats");

    return router;
}