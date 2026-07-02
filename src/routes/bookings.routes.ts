import express from "express";

export default function bookingsRoutes() {
    const router = express.Router();

    router.post("/");
    router.get("/");

    router.get("/:bookingId");

    router.patch("/:bookingId/confirm");
    router.patch("/:bookingId/cancel");

    router.delete("/:bookingId");

    return router;
}