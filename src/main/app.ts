import express from "express";
import cors from "cors";


import bookingsRoutes from "../routes/bookings.routes";
import clientsRoutes from "../routes/clients.routes";
import moviesRoutes from "../routes/movies.routes";
import roomsRoutes from "../routes/rooms.routes";
import seatsRoutes from "../routes/seats.routes";
import theatresRoutes from "../routes/theatres.routes";
import sessionsRoutes from "../routes/sessions.routes";

export default function criarApp() {
    const app = express()
    app.use(cors());
    app.use(express.json());

    // =======================
    // Importação das rotas
    // =======================

    app.use("/bookings", bookingsRoutes())
    app.use("/clientes", clientsRoutes())
    app.use("/movies", moviesRoutes())
    app.use("/rooms", roomsRoutes())
    app.use("/seats", seatsRoutes())
    app.use("/sessions", sessionsRoutes())
    app.use("/theatres", theatresRoutes())
    

    return app;
}