import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import theatresRoutes from "../infrastructure/http/routes/theatres.routes";
import roomsRoutes from "../infrastructure/http/routes/rooms.routes";
import clientsRoutes from "../infrastructure/http/routes/Clients.routes"
import moviesRoutes from "../infrastructure/http/routes/movies.routes";
import seatsRoutes from "../infrastructure/http/routes/Seats.routes"
import sessionsRoutes from "../infrastructure/http/routes/session.routes";
import bookingsRoutes from "../infrastructure/http/routes/bookings.routes";


import { TheatreController } from "../infrastructure/http/controllers/TheatreController";
import { RoomController } from "../infrastructure/http/controllers/RoomController";
import { ClientController } from "../infrastructure/http/controllers/ClientController"
import { MovieController } from "../infrastructure/http/controllers/MovieController"
import { SeatController } from "../infrastructure/http/controllers/SeatsController"
import { SessionController } from "../infrastructure/http/controllers/SessionController"
import { BookingController } from "../infrastructure/http/controllers/BookingController"

interface Controllers {
    theatreController: TheatreController,
    roomController: RoomController,
    clientController: ClientController
    movieController: MovieController,
    seatController: SeatController,
    sessionController: SessionController,
    bookingController: BookingController
}

export default function criarApp({

    theatreController,
    roomController,
    clientController,
    movieController,
    seatController,
    sessionController,
    bookingController

}: Controllers) {
    
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(express.json());

    app.use("/theatres", theatresRoutes(theatreController));
    app.use("/rooms", roomsRoutes(roomController));
    app.use("/clientes", clientsRoutes(clientController));
    app.use("/movies", moviesRoutes(movieController));
    app.use("/seats", seatsRoutes(seatController));
    app.use("/sessions", sessionsRoutes(sessionController));
    app.use("/bookings", bookingsRoutes(bookingController));

    return app;
}