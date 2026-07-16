import { Client } from "@prisma/client";
import { ClientRepository } from "../../../../application/clientUser/domain/ClientRepository";
import { CreateClientDTO } from "../../../../application/clientUser/dto/CreateClientDTO";
import { UpdateCLientDTO } from "../../../../application/clientUser/dto/UpdateClientDTO";
import { db } from "../db"

export class PrismaClientRepository implements ClientRepository {
    async create(data: CreateClientDTO): Promise<Client> {
        return db.client.create({
            data
        })
    }
    async findById(id: number): Promise<Client | null> {
        return db.client.findUnique({ where: { idClient: id } })
    }
    async update(id: number, data: UpdateCLientDTO): Promise<Client> {
        return db.client.update({ where: { idClient: id }, data })
    }
    async delete(id: number): Promise<void> {
        await db.client.delete({where:{idClient : id}})
    }
}