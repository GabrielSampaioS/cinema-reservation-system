import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import theatresRoutes from "../application/theatre/infrastructure/theatres.routes";
import roomsRoutes from "../application/room/infrastructure/rooms.routes";
import clientsRoutes from "../application/clientUser/infrastructure/Clients.routes"
import moviesRoutes from "../application/movie/infrastructure/movies.routes";

//TODO
import bookingsRoutes from "../infrastructure/http/routes/bookings.routes";
import seatsRoutes from "../infrastructure/http/routes/seats.routes";
import sessionsRoutes from "../infrastructure/http/routes/sessions.routes";

import { TheatreController } from "../application/theatre/infrastructure/TheatreController";
import { RoomController } from "../application/room/infrastructure/RoomController";
import { ClientController } from "../application/clientUser/infrastructure/ClientController"
import { MovieController } from "../application/movie/infrastructure/MovieController"

interface Controllers {
    theatreController: TheatreController,
    roomController: RoomController,
    clientController: ClientController
    movieController: MovieController
}

export default function criarApp({
    theatreController,
    roomController,
    clientController,
    movieController
}: Controllers) {
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(express.json());


    app.use("/bookings", bookingsRoutes());
    

    app.use("/seats", seatsRoutes());
    app.use("/sessions", sessionsRoutes());

    app.use("/theatres", theatresRoutes(theatreController));
    app.use("/rooms", roomsRoutes(roomController));
    app.use("/clientes", clientsRoutes(clientController));
    app.use("/movies", moviesRoutes(movieController));
    return app;
}