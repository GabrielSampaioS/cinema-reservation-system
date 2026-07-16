import express from "express";
import { BookingController } from "../controllers/BookingController";


export default function bookingsRoutes(
    controller: BookingController
) {

    const router = express.Router();



    router.post(
        "/",
        controller.create.bind(controller)
    );



    router.get(
        "/",
        controller.findAll.bind(controller)
    );



    router.get(
        "/:bookingId",
        controller.findById.bind(controller)
    );



    router.patch(
        "/:bookingId",
        controller.update.bind(controller)
    );



    router.delete(
        "/:bookingId",
        controller.delete.bind(controller)
    );



    // reservas do cliente

    router.get(
        "/client/:clientId",
        controller.findByClientId.bind(controller)
    );



    // reservas da sessão

    router.get(
        "/session/:sessionId",
        controller.findBySessionId.bind(controller)
    );



    return router;

}