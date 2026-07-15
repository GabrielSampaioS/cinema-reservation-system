import { PrismaTheatreRepository } from "../../application/theatre/infrastructure/PrismaTheatreRepository";

import { TheatreController } from "../..//application/theatre/infrastructure/TheatreController";

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