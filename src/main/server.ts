import dotenv from "dotenv"; 
import criarApp from "./app";
import { PrismaTheatreRepository } from "../infrastructure/database/prisma/repositories/PrismaTheatreRepository";
import { CreateTheatreUseCase } from "../application/use-cases/theatre/CreateTheatreUseCase";
import { TheatreController } from "../infrastructure/http/controllers/TheatreController";

dotenv.config()

const theatreRepository = new PrismaTheatreRepository();
const createTheatreUseCase = new CreateTheatreUseCase(theatreRepository);
const theatreController = new TheatreController(
    createTheatreUseCase,
    // ...
);


async function start() {
    //await connectDatabase();

    //implementação das interfaces

    const app = criarApp({theatreController})

    app.listen(
        process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        }
    )
}

start()