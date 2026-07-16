import { PrismaTheatreRepository } from "../../infrastructure/database/prisma/repositories/PrismaTheatreRepository";

import { TheatreController } from "../../infrastructure/http/controllers/TheatreController";

import { CreateTheatreUseCase } from "../../application/theatre/use-case/CreateTheatreUseCase";
import { GetAllTheatresUseCase } from "../../application/theatre/use-case/GetAllTheatresUseCase";
import { GetTheatreByIdUseCase } from "../../application/theatre/use-case/GetTheatreByIdUseCase";
import { UpdateTheatreUseCase } from "../../application/theatre/use-case/UpdateTheatreUseCase";
import { DeleteTheatreUseCase } from "../../application/theatre/use-case/DeleteTheatreUseCase";
import { GetNearbyTheatresUseCase } from "../../application/theatre/use-case/GetNearbyTheatresUseCase";

export function makeTheatreController() {
    const repository = new PrismaTheatreRepository();

    return new TheatreController(
        new CreateTheatreUseCase(repository),
        new GetAllTheatresUseCase(repository),
        new GetTheatreByIdUseCase(repository),
        new UpdateTheatreUseCase(repository),
        new DeleteTheatreUseCase(repository),
        new GetNearbyTheatresUseCase(repository)
    );
}