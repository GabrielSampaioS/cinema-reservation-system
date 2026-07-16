import { PrismaSeatRepository } from "../../infrastructure/database/prisma/repositories/PrismaSeatRepository";

import {SeatController} from "../../infrastructure/http/controllers/SeatsController"

import { CreateSeatUseCase   } from "../../application/seat/use-case/CreateSeatUseCase";
import { DeleteSeatUseCase } from "../../application/seat/use-case/DeleteSeatUseCase";
import { GetSeatByIdUseCase } from "../../application/seat/use-case/GetSeatByIdUseCase";
import { GetSeatsByRoomUseCase } from "../../application/seat/use-case/GetSeatsByRoomUseCase";
import { UpdateSeatUseCase } from "../../application/seat/use-case/UpdateSeatUseCase";

export function makeSeatController() {
    const repository = new PrismaSeatRepository();

    return new SeatController(
        new CreateSeatUseCase(repository),
        new DeleteSeatUseCase(repository),
        new GetSeatByIdUseCase(repository),
        new GetSeatsByRoomUseCase(repository),
        new UpdateSeatUseCase(repository),
    );
}