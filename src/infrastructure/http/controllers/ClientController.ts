import { Request, Response } from "express";

import { CreateClientUseCase } from "../../../application/clientUser/use-case/CreateClientUseCase"
import { DeleteClientUseCase } from "../../../application/clientUser/use-case/DeleteClientUseCase"
import { GetClientByIdClientUseCase } from "../../../application/clientUser/use-case/GetClientByIdUseCase"
import { UpdateClientUseCase } from "../../../application/clientUser/use-case/UpdateClientUseCase"


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
        const { clientId } = req.params;
        const result = await this.getClientByIdClientUseCase.execute(Number(clientId))
        return res.status(200).json(result);
    }
    async update(req: Request, res: Response) {
        const { clientId } = req.params;
        const result = await this.updateClientUseCase.execute(Number(clientId), req.body)
        return res.status(200).json(result);
    }
    async delete(req: Request, res: Response) {
        const { clientId } = req.params;

        await this.deleteClientUseCase.execute(Number(clientId))
        return res.sendStatus(204);
     }
}