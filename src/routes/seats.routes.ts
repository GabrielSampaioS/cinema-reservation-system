import express  from "express";

export default function seatsRoutes(){
    const router = express.Router()

    //const controller = new Controller(repository)

    router.get("/:seatId")
    router.patch("/:seatId")
    router.delete("/:seatId")

    return router;
}