import { Request, Response } from "express";

import { CreateRoomUseCase } from "../../../application/room/use-case/CreateRoomUseCase";
import { GetRoomByIdUseCase } from "../../../application/room/use-case/GetRoomByIdUseCase";
import { DeleteRoomUseCase } from "../../../application/room/use-case/DeleteRoomUseCase";
import { UpdateRoomUseCase } from "../../../application/room/use-case/UpdateRoomUseCase";
import { CreateRoomDTO } from "../../../application/room/dto/CreateRoomDTO";
import { RoomResponseDTO } from "../../../application/room/dto/RoomResponseDTO";
import { UpdateRoomDTO } from "../../../application/room/dto/UpdateRoomDTO";

export class RoomController {
    constructor(
        private readonly createRoomUseCase: CreateRoomUseCase,
        private readonly deleteRoomUseCase: DeleteRoomUseCase,
        private readonly getRoomByIdUseCase: GetRoomByIdUseCase,
        private readonly updateRoomUseCase: UpdateRoomUseCase,
    ) {}

    async create(req: Request<{}, {}, CreateRoomDTO>, res: Response<RoomResponseDTO>) {
        const result = await this.createRoomUseCase.execute(req.body);

        return res.status(201).json(result);
    }

    async findByRoomId(req: Request<{ roomId: string }>, res: Response<RoomResponseDTO>) {
        const { roomId } = req.params;
        const result = await this.getRoomByIdUseCase.execute(Number(roomId));

        return res.status(200).json(result);
    }

    async update(
        req: Request<{ roomId: string }, {}, UpdateRoomDTO>,
        res: Response<RoomResponseDTO>,
    ) {
        const { roomId } = req.params;

        const result = await this.updateRoomUseCase.execute(Number(roomId), req.body);

        return res.status(200).json(result);
    }

    async delete(req: Request<{ roomId: string }>, res: Response) {
        const { roomId } = req.params;

        await this.deleteRoomUseCase.execute(Number(roomId));

        return res.sendStatus(204);
    }
}
