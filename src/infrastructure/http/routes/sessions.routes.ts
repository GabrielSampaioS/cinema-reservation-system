import express  from "express";

export default function sessionsRoutes() {
    const router = express.Router();

    /*router.post("/");
    router.get("/");

    router.get("/:sessionId");
    router.patch("/:sessionId");
    router.delete("/:sessionId");

    // estado real dos assentos
    router.get("/:sessionId/seats");*/

    return router;
}