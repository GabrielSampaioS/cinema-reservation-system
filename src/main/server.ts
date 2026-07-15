import dotenv from "dotenv";
import criarApp from "./app";
//import { PrismaTheatreRepository } from "../application/theatre/infrastructure/PrismaTheatreRepository";

import { makeTheatreController } from "./factories/makeTheatreController"
import { makeRoomController } from "./factories/makeRoomControlle"
import { makeClientController } from "./factories/makeClienteControlle"

dotenv.config()

//const theatreRepository = new PrismaTheatreRepository();


//factories
const theatreController = makeTheatreController()
const roomController = makeRoomController()
const clientController = makeClientController()


async function start() {
    //await connectDatabase();

    //implementação das interfaces

    const app = criarApp({ theatreController, roomController, clientController })

    app.listen(
        process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        }
    )
}

start()