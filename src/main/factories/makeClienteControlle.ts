import { PrismaClientRepository } from "../../application/clientUser/infrastructure/PrismaClientRepository";

import {ClientController} from "../../application/clientUser/infrastructure/ClientController"

import { CreateClientUseCase   } from "../../application/clientUser/use-case/CreateClientUseCase";
import { DeleteClientUseCase } from "../../application/clientUser/use-case/DeleteClientUseCase";
import { GetClientByIdClientUseCase } from "../../application/clientUser/use-case/GetClientByIdUseCase";
import { UpdateClientUseCase } from "../../application/clientUser/use-case/UpdateClientUseCase";

export function makeClientController() {
    const repository = new PrismaClientRepository();

    return new ClientController(
        new CreateClientUseCase(repository),
        new DeleteClientUseCase(repository),
        new GetClientByIdClientUseCase(repository),
        new UpdateClientUseCase(repository),
    );
}