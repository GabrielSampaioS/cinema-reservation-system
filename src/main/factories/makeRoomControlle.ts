import { PrismaRoomRepository } from "../../application/room/infrastructure/PrismaRoomRepository";

import {RoomController} from "../../application/room/infrastructure/RoomController"

import { CreateRoomUseCase   } from "../../application/room/use-cases/CreateRoomUseCase";
import { DeleteRoomUseCase } from "../../application/room/use-cases/DeleteRoomUseCase";
import { GetRoomByIdUseCase } from "../../application/room/use-cases/GetRoomByIdUseCase";
import { UpdateRoomUseCase } from "../../application/room/use-cases/UpdateRoomUseCase";

export function makeRoomController() {
    const repository = new PrismaRoomRepository();

    return new RoomController(
        new CreateRoomUseCase(repository),
        new DeleteRoomUseCase(repository),
        new GetRoomByIdUseCase(repository),
        new UpdateRoomUseCase(repository),
    );
}