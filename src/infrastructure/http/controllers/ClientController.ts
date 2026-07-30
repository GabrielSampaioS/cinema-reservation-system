import { Request, Response } from "express";

//UsesCases
import { CreateClientUseCase } from "../../../application/clientUser/use-case/CreateClientUseCase";
import { DeleteClientUseCase } from "../../../application/clientUser/use-case/DeleteClientUseCase";
import { GetClientByIdClientUseCase } from "../../../application/clientUser/use-case/GetClientByIdUseCase";
import { UpdateClientUseCase } from "../../../application/clientUser/use-case/UpdateClientUseCase";

//DTOs
import { CreateClientDTO } from "../../../application/clientUser/dto/CreateClientDTO";
import { ClientResponseDTO } from "../../../application/clientUser/dto/ClientResponseDTO";
import { UpdateClientDTO } from "../../../application/clientUser/dto/UpdateClientDTO";

export class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCase,
        private readonly deleteClientUseCase: DeleteClientUseCase,
        private readonly getClientByIdClientUseCase: GetClientByIdClientUseCase,
        private readonly updateClientUseCase: UpdateClientUseCase,
    ) {}

    async create(req: Request<{}, {}, CreateClientDTO>, res: Response<ClientResponseDTO>) {
        const result = await this.createClientUseCase.execute(req.body);
        return res.status(201).json(result);
    }

    async findById(req: Request<{ clientId: string }>, res: Response<ClientResponseDTO>) {
        const { clientId } = req.params;
        const result = await this.getClientByIdClientUseCase.execute(Number(clientId));
        return res.status(200).json(result);
    }
    async update(
        req: Request<{ clientId: string }, {}, UpdateClientDTO>,
        res: Response<ClientResponseDTO>,
    ) {
        const { clientId } = req.params;
        const result = await this.updateClientUseCase.execute(Number(clientId), req.body);
        return res.status(200).json(result);
    }
    async delete(req: Request<{ clientId: string }>, res: Response) {
        const { clientId } = req.params;

        await this.deleteClientUseCase.execute(Number(clientId));
        return res.sendStatus(204);
    }
}
