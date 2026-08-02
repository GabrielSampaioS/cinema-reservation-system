import { Client } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { ClientResponseDTO } from "../dto/ClientResponseDTO";

export class ClientMapper extends BaseMapper<Client, ClientResponseDTO> {
    toDTO(client: Client): ClientResponseDTO {
        return {
            idClient: client.idClient,
            name: client.name,
            email: client.email,
            createdAt: client.createdAt,
        };
    }
}
