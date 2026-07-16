import express from "express";
import { ClientController } from "../controllers/ClientController";

export default function clientsRoutes(
    controller: ClientController
) {

    const router = express.Router();

    router.post("/", controller.create.bind(controller));

    router.get("/:clientId", controller.findById.bind(controller));

    router.patch("/:clientId", controller.update.bind(controller));

    router.delete("/:clientId", controller.delete.bind(controller));

    // Reservas do cliente
    //router.get(
      //  "/:clientId/bookings",
        //controller.findBookings.bind(controller)
    //);

    return router;
}