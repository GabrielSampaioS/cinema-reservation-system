import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import bookingsRoutes from "../infrastructure/http/routes/bookings.routes";
import clientsRoutes from "../infrastructure/http/routes/clients.routes";
import moviesRoutes from "../infrastructure/http/routes/movies.routes";
import roomsRoutes from "../application/room/infrastructure/rooms.routes";
import seatsRoutes from "../infrastructure/http/routes/seats.routes";
import theatresRoutes from "../application/theatre/infrastructure/theatres.routes";
import sessionsRoutes from "../infrastructure/http/routes/sessions.routes";

import { TheatreController } from "../application/theatre/infrastructure/TheatreController";
import { RoomController } from "../application/room/infrastructure/RoomController";

interface Controllers {
    theatreController: TheatreController,
    roomController: RoomController
}

export default function criarApp({
    theatreController,
    roomController
}: Controllers) {
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(express.json());

    
    app.use("/bookings", bookingsRoutes());
    app.use("/clientes", clientsRoutes());
    app.use("/movies", moviesRoutes());
    
    app.use("/seats", seatsRoutes());
    app.use("/sessions", sessionsRoutes());

    app.use("/theatres", theatresRoutes(theatreController));
    app.use("/rooms", roomsRoutes(roomController))
    return app;
}