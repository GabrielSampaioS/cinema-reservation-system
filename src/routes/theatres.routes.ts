import express from "express";

export default function theatresRoutes() {
    const router = express.Router();

    router.post("/");
    router.get("/");
    router.get("/nearby");

    router.get("/:theatreId");
    router.patch("/:theatreId");
    router.delete("/:theatreId");

    // rooms dentro do theatre
    router.post("/:theatreId/rooms");
    router.get("/:theatreId/rooms");

    return router;
}