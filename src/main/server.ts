import dotenv from "dotenv";
import criarApp from "./app";

import { makeTheatreRouter } from "./factories/makeTheatreRouter"
import { makeRoomRouter } from "./factories/makeRoomRouter"
import { makeClientRouter } from "./factories/makeClienteRouter"
import { makeMovieRouter } from "./factories/makeMovieRouter"
import { makeSeatRouter } from "./factories/makeSeatRouter"
import { makeSessioRouter } from "./factories/makeSessionRouter"
import { makeBookingRouter } from "./factories/makebookingRouter"

dotenv.config()

//const theatreRepository = new PrismaTheatreRepository();

//factories
const theatresRoutes = makeTheatreRouter()
const roomsRoutes = makeRoomRouter()
const clientsRoutes = makeClientRouter()
const moviesRoutes = makeMovieRouter()
const seatsRoutes = makeSeatRouter()
const sessionsRoutes = makeSessioRouter()
const bookingsRoutes = makeBookingRouter()


async function start() {
    //await connectDatabase();

    //implementação das interfaces

    const app = criarApp({ theatresRoutes, roomsRoutes, clientsRoutes, moviesRoutes, seatsRoutes, sessionsRoutes, bookingsRoutes })

    app.listen(
        process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        }
    )
}

start()