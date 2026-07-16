import express from "express";
import { SessionController } from "./SessionController";

export default function sessionsRoutes(
    controller: SessionController
) {

    const router = express.Router();


    // Criar sessão
    router.post(
        "/",
        controller.create.bind(controller)
    );


    // Listar todas as sessões
    router.get(
        "/",
        controller.findAll.bind(controller)
    );


    // Buscar sessão por ID
    router.get(
        "/:sessionId",
        controller.findById.bind(controller)
    );


    // Atualizar sessão
    router.patch(
        "/:sessionId",
        controller.update.bind(controller)
    );


    // Deletar sessão
    router.delete(
        "/:sessionId",
        controller.delete.bind(controller)
    );


    // Sessões de um filme
    router.get(
        "/movie/:movieId",
        controller.findByMovieId.bind(controller)
    );



    return router;
}