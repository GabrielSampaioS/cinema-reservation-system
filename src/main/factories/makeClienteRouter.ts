import { PrismaClientRepository } from "../../infrastructure/database/prisma/repositories/PrismaClientRepository";

import { ClientController } from "../../infrastructure/http/controllers/ClientController";

import { CreateClientUseCase } from "../../application/clientUser/use-case/CreateClientUseCase";
import { DeleteClientUseCase } from "../../application/clientUser/use-case/DeleteClientUseCase";
import { GetClientByIdClientUseCase } from "../../application/clientUser/use-case/GetClientByIdUseCase";
import { UpdateClientUseCase } from "../../application/clientUser/use-case/UpdateClientUseCase";
import clientsRoutes from "../../infrastructure/http/routes/client.routes";

export function makeClientRouter() {
    const repository = new PrismaClientRepository();

    const clientController = new ClientController(
        new CreateClientUseCase(repository),
        new DeleteClientUseCase(repository),
        new GetClientByIdClientUseCase(repository),
        new UpdateClientUseCase(repository),
    );

    return clientsRoutes(clientController);
}
