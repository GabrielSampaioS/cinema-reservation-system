import criarApp from "../../src/main/app"

import { makeTheatreRouter } from "../../src/main/factories/makeTheatreRouter"
import { makeRoomRouter } from "../../src/main/factories/makeRoomRouter"
import { makeClientRouter } from "../../src/main/factories/makeClienteRouter"
import { makeMovieRouter } from "../../src/main/factories/makeMovieRouter"
import { makeSeatRouter } from "../../src/main/factories/makeSeatRouter"
import { makeSessioRouter } from "../../src/main/factories/makeSessionRouter"
import { makeBookingRouter } from "../../src/main/factories/makebookingRouter"

//factories
const theatresRoutes = makeTheatreRouter()
const roomsRoutes = makeRoomRouter()
const clientsRoutes = makeClientRouter()
const moviesRoutes = makeMovieRouter()
const seatsRoutes = makeSeatRouter()
const sessionsRoutes = makeSessioRouter()
const bookingsRoutes = makeBookingRouter()

export const app = criarApp({ theatresRoutes, roomsRoutes, clientsRoutes, moviesRoutes, seatsRoutes, sessionsRoutes, bookingsRoutes })
