import { Client } from "@prisma/client";
import { CreateClientDTO } from "../dto/CreateClientDTO";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";
import { UpdateClientDTO } from "../dto/UpdateClientDTO";

export interface ClientRepository {
    create(data: CreateClientDTO): Promise<Client>;

    findById(id: number): Promise<Client | null>;

    update(id: number, data: UpdateClientDTO): Promise<Client>;

    delete(id: number): Promise<void>;

    findByEmail(email: string): Promise<Client | null>;
}
