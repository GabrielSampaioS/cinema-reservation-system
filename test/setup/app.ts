import criarApp from "../../src/main/app"

import { makeTheatreController } from "../../src/main/factories/makeTheatreController"
import { makeRoomController } from "../../src/main/factories/makeRoomControlle"
import { makeClientController } from "../../src/main/factories/makeClienteControlle"
import { makeMovieController } from "../../src/main/factories/makeMovieControlle"
import { makeSeatController } from "../../src/main/factories/makeSeatControlle"
import { makeSessioController } from "../../src/main/factories/makeSessionControlle"
import { makeBookingController } from "../../src/main/factories/makebookingController"

//factories
const theatreController = makeTheatreController()
const roomController = makeRoomController()
const clientController = makeClientController()
const movieController = makeMovieController()
const seatController = makeSeatController()
const sessionController = makeSessioController()
const bookingController = makeBookingController()

export const app = criarApp({ theatreController, roomController, clientController, movieController, seatController, sessionController, bookingController })
