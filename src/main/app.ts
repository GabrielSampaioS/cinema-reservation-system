import express, { RequestHandler } from "express";

import cors from "cors";
import dotenv from "dotenv";

import { applicationLogger, securityLogger } from "../logger";
import pino_http from "pino-http"

import theatresRoutes from "../infrastructure/http/routes/theatre.routes";
import roomsRoutes from "../infrastructure/http/routes/room.routes";
import clientsRoutes from "../infrastructure/http/routes/client.routes"
import moviesRoutes from "../infrastructure/http/routes/movie.routes";
import seatsRoutes from "../infrastructure/http/routes/seat.routes"
import sessionsRoutes from "../infrastructure/http/routes/session.routes";
import bookingsRoutes from "../infrastructure/http/routes/booking.routes";


import { TheatreController } from "../infrastructure/http/controllers/TheatreController";
import { RoomController } from "../infrastructure/http/controllers/RoomController";
import { ClientController } from "../infrastructure/http/controllers/ClientController"
import { MovieController } from "../infrastructure/http/controllers/MovieController"
import { SeatController } from "../infrastructure/http/controllers/SeatController"
import { SessionController } from "../infrastructure/http/controllers/SessionController"
import { BookingController } from "../infrastructure/http/controllers/BookingController"

import { middlewareError } from "../middlewares/MiddlewareError";


interface Controllers {
    theatreController: TheatreController,
    roomController: RoomController,
    clientController: ClientController
    movieController: MovieController,
    seatController: SeatController,
    sessionController: SessionController,
    bookingController: BookingController
}

// Logger

const loggerHttp = pino_http({logger : applicationLogger})

const loggerSecurityMiddleware: RequestHandler = (
    req,
    res,
    next
) => {

    req.security_log = securityLogger.child({
        req: {
            method: req.method,
            url: req.originalUrl,
            headers: req.headers
        }
    });

    next();
};

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

    app.use(loggerHttp)
    app.use(loggerSecurityMiddleware)
    app.use(cors());
    app.use(express.json());

    app.use("/theatre", theatresRoutes(theatreController));
    app.use("/room", roomsRoutes(roomController));
    app.use("/client", clientsRoutes(clientController));
    app.use("/movie", moviesRoutes(movieController));
    app.use("/seat", seatsRoutes(seatController));
    app.use("/session", sessionsRoutes(sessionController));
    app.use("/booking", bookingsRoutes(bookingController));

    app.use(middlewareError)

    return app;
}