import { Request, Response } from "express";

import { CreateClientUseCase } from "../use-case/CreateClientUseCase"
import { DeleteClientUseCase } from "../use-case/DeleteClientUseCase"
import { GetClientByIdClientUseCase } from "../use-case/GetClientByIdUseCase"
import { UpdateClientUseCase } from "../use-case/UpdateClientUseCase"


export class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCase,
        private readonly deleteClientUseCase: DeleteClientUseCase,
        private readonly getClientByIdClientUseCase: GetClientByIdClientUseCase,
        private readonly updateClientUseCase: UpdateClientUseCase,
    ) { }

    async create(req: Request, res: Response) {
        const result = await this.createClientUseCase.execute(req.body)
        return res.status(201).json(result);

    }

    async findById(req: Request, res: Response) {
        const { ClientId } = req.params;
        const result = await this.getClientByIdClientUseCase.execute(Number(ClientId))
        return res.status(201).json(result);
    }
    async update(req: Request, res: Response) {
        const { ClientId } = req.params;
        const result = await this.updateClientUseCase.execute(Number(ClientId), req.body)
        return res.status(201).json(result);
    }
    async delete(req: Request, res: Response) {
        const { ClientId } = req.params;

        await this.deleteClientUseCase.execute(Number(ClientId))
        return res.sendStatus(204);
     }
}