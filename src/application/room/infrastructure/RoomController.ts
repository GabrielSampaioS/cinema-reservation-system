import { Request, Response } from "express";

import { CreateRoomUseCase } from "../use-cases/CreateRoomUseCase";
import { GetRoomByIdUseCase } from "../use-cases/GetRoomByIdUseCase";                                
import { DeleteRoomUseCase } from "../use-cases/DeleteRoomUseCase";
import { UpdateRoomUseCase } from "../use-cases/UpdateRoomUseCase";

export class RoomController {
    constructor(
        private readonly createRoomUseCase: CreateRoomUseCase,
        private readonly deleteRoomUseCase: DeleteRoomUseCase,
        private readonly getRoomByIdUseCase: GetRoomByIdUseCase,
        private readonly updateRoomUseCase: UpdateRoomUseCase,
    ) {}

    async create(req: Request, res: Response) {

        const result = await this.createRoomUseCase.execute(req.body);

        return res.status(201).json(result);
    }


   async findByRoomId(req: Request, res: Response) {
        const { roomId } = req.params;

        const result = await this.getRoomByIdUseCase.execute(Number(roomId));

        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const { roomId } = req.params;

        const result = await this.updateRoomUseCase.execute(
            Number(roomId),
            req.body
        );

        return res.status(200).json(result);
    }

    async delete(req: Request, res: Response) {
        const { roomId } = req.params;

        await this.deleteRoomUseCase.execute(Number(roomId));

        return res.sendStatus(204);
    }

}