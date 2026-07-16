import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import theatresRoutes from "../application/theatre/infrastructure/theatres.routes";
import roomsRoutes from "../application/room/infrastructure/rooms.routes";
import clientsRoutes from "../application/clientUser/infrastructure/Clients.routes"
import moviesRoutes from "../application/movie/infrastructure/movies.routes";
import seatsRoutes from "../application//seat/infrastructure/Seats.routes"
import sessionsRoutes from "../application/session/infrastructure/session.routes";
import bookingsRoutes from "../application/booking/infrastructure/bookings.routes";


import { TheatreController } from "../application/theatre/infrastructure/TheatreController";
import { RoomController } from "../application/room/infrastructure/RoomController";
import { ClientController } from "../application/clientUser/infrastructure/ClientController"
import { MovieController } from "../application/movie/infrastructure/MovieController"
import { SeatController } from "../application/seat/infrastructure/SeatsController"
import { SessionController } from "../application/session/infrastructure/SessionController"
import { BookingController } from "../application/booking/infrastructure/BookingController"

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