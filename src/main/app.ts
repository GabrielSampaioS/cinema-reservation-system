import express, { RequestHandler, Router } from "express";

import cors from "cors";
import dotenv from "dotenv";

import { applicationLogger, securityLogger } from "../logger";
import pino_http from "pino-http"

import { middlewareError } from "../middlewares/MiddlewareError";

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


interface Routes {
    theatresRoutes: Router;
    roomsRoutes: Router;
    clientsRoutes: Router;
    moviesRoutes: Router;
    seatsRoutes: Router;
    sessionsRoutes: Router;
    bookingsRoutes: Router;
}

export default function criarApp({

    theatresRoutes,
    roomsRoutes,
    clientsRoutes,
    moviesRoutes,
    seatsRoutes,
    sessionsRoutes,
    bookingsRoutes

}: Routes) {
    
    const app = express();
    dotenv.config();

    app.use(loggerHttp)
    app.use(loggerSecurityMiddleware)
    app.use(cors());
    app.use(express.json());

    app.use("/theatre", theatresRoutes);
    app.use("/room", roomsRoutes);
    app.use("/client", clientsRoutes);
    app.use("/movie", moviesRoutes);
    app.use("/seat", seatsRoutes);
    app.use("/session", sessionsRoutes);
    app.use("/booking", bookingsRoutes);

    app.use(middlewareError)

    return app;
}