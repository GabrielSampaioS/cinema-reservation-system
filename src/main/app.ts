import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import bookingsRoutes from "../infrastructure/http/routes/bookings.routes";
import clientsRoutes from "../infrastructure/http/routes/clients.routes";
import moviesRoutes from "../infrastructure/http/routes/movies.routes";
import roomsRoutes from "../infrastructure/http/routes/rooms.routes";
import seatsRoutes from "../infrastructure/http/routes/seats.routes";
import theatresRoutes from "../infrastructure/http/routes/theatres.routes";
import sessionsRoutes from "../infrastructure/http/routes/sessions.routes";

import { TheatreController } from "../infrastructure/http/controllers/TheatreController";

interface Controllers {
    theatreController: TheatreController;
}

export default function criarApp({
    theatreController,
}: Controllers) {
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(express.json());

    app.use("/bookings", bookingsRoutes());
    app.use("/clientes", clientsRoutes());
    app.use("/movies", moviesRoutes());
    app.use("/rooms", roomsRoutes());
    app.use("/seats", seatsRoutes());
    app.use("/sessions", sessionsRoutes());

    app.use("/theatres", theatresRoutes(theatreController));
    return app;
}