import { PrismaRoomRepository } from "../../infrastructure/database/prisma/repositories/PrismaRoomRepository";

import { RoomController } from "../../infrastructure/http/controllers/RoomController";

import { CreateRoomUseCase } from "../../application/room/use-case/CreateRoomUseCase";
import { DeleteRoomUseCase } from "../../application/room/use-case/DeleteRoomUseCase";
import { GetRoomByIdUseCase } from "../../application/room/use-case/GetRoomByIdUseCase";
import { UpdateRoomUseCase } from "../../application/room/use-case/UpdateRoomUseCase";
import roomsRoutes from "../../infrastructure/http/routes/room.routes";

export function makeRoomRouter() {
    const repository = new PrismaRoomRepository();

    const roomController = new RoomController(
        new CreateRoomUseCase(repository),
        new DeleteRoomUseCase(repository),
        new GetRoomByIdUseCase(repository),
        new UpdateRoomUseCase(repository),
    );

    return roomsRoutes(roomController);
}
