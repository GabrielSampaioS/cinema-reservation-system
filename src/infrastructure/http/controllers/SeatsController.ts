import { Request, Response } from "express";

import { CreateSeatUseCase } from "../../../application/seat/use-case/CreateSeatUseCase"
import { DeleteSeatUseCase } from "../../../application/seat/use-case/DeleteSeatUseCase"
import { GetSeatByIdUseCase } from "../../../application/seat/use-case/GetSeatByIdUseCase"
import { GetSeatsByRoomUseCase } from "../../../application/seat/use-case/GetSeatsByRoomUseCase"
import { UpdateSeatUseCase } from "../../../application/seat/use-case/UpdateSeatUseCase"


export class SeatController {
    constructor(
        private readonly createSeatUseCase: CreateSeatUseCase,
        private readonly deleteSeatUseCase: DeleteSeatUseCase,
        private readonly getSeatByIdUseCase: GetSeatByIdUseCase,
        private readonly getSeatsByRoomUseCase: GetSeatsByRoomUseCase,
        private readonly updateSeatUseCase: UpdateSeatUseCase,
    ) { }

    async create(req: Request, res: Response) {
        const result = await this.createSeatUseCase.execute(req.body)
        return res.status(201).json(result);

    }

    async findById(req: Request, res: Response) {
        const { ClientId } = req.params;
        const result = await this.getSeatByIdUseCase.execute(Number(ClientId))
        return res.status(201).json(result);
    }

    async findByIdRoom(req: Request, res: Response) {
        const { ClientId } = req.params;
        const result = await this.getSeatsByRoomUseCase.execute(Number(ClientId))
        return res.status(201).json(result);
    }

    async update(req: Request, res: Response) {
        const { ClientId } = req.params;
        const result = await this.updateSeatUseCase.execute(Number(ClientId), req.body)
        return res.status(201).json(result);
    }
    async delete(req: Request, res: Response) {
        const { ClientId } = req.params;

        await this.deleteSeatUseCase.execute(Number(ClientId))
        return res.sendStatus(204);
     }
}