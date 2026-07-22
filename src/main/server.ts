import dotenv from "dotenv";
import criarApp from "./app";
//import { PrismaTheatreRepository } from "../application/theatre/infrastructure/PrismaTheatreRepository";

import { makeTheatreController } from "./factories/makeTheatreController"
import { makeRoomController } from "./factories/makeRoomControlle"
import { makeClientController } from "./factories/makeClienteControlle"
import { makeMovieController } from "./factories/makeMovieControlle"
import { makeSeatController } from "./factories/makeSeatControlle"
import { makeSessioController } from "./factories/makeSessionControlle"
import { makeBookingController } from "./factories/makebookingController"

dotenv.config()

//const theatreRepository = new PrismaTheatreRepository();

//factories
const theatreController = makeTheatreController()
const roomController = makeRoomController()
const clientController = makeClientController()
const movieController = makeMovieController()
const seatController = makeSeatController()
const sessionController = makeSessioController()
const bookingController = makeBookingController()


async function start() {
    //await connectDatabase();

    //implementação das interfaces

    const app = criarApp({ theatreController, roomController, clientController, movieController, seatController, sessionController, bookingController })

    app.listen(
        process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        }
    )
}

start()