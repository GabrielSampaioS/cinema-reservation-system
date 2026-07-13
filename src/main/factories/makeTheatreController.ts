import { PrismaTheatreRepository } from "../../application/theatre/infrastructure/PrismaTheatreRepository";

import { TheatreController } from "../..//application/theatre/infrastructure/TheatreController";

import { CreateTheatreUseCase } from "../..//application/theatre/use-cases/CreateTheatreUseCase";
import { GetAllTheatresUseCase } from "../..//application/theatre/use-cases/GetAllTheatresUseCase";
import { GetTheatreByIdUseCase } from "../..//application/theatre/use-cases/GetTheatreByIdUseCase";
import { UpdateTheatreUseCase } from "../..//application/theatre/use-cases/UpdateTheatreUseCase";
import { DeleteTheatreUseCase } from "../..//application/theatre/use-cases/DeleteTheatreUseCase";
import { GetNearbyTheatresUseCase } from "../..//application/theatre/use-cases/GetNearbyTheatresUseCase";

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