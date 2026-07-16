import express from "express";
import { SeatController } from "../controllers/SeatsController";

export default function seatsRoutes(
    controller: SeatController
) {

    const router = express.Router();

    // Cria um assento para uma sala
    router.post(
        "/rooms/:roomId/seats",
        controller.create.bind(controller)
    );

    // Lista os assentos de uma sala
    router.get(
        "/rooms/:roomId/seats",
        controller.findByIdRoom.bind(controller)
    );

    // Busca um assento específico
    router.get(
        "/:seatId",
        controller.findById.bind(controller)
    );

    // Atualiza um assento
    router.patch(
        "/:seatId",
        controller.update.bind(controller)
    );

    // Remove um assento
    router.delete(
        "/:seatId",
        controller.delete.bind(controller)
    );

    return router;
}