import { Room } from "@prisma/client";
import { CreateRoomDTO } from "../dto/CreateRoomDTO";
import { UpdateRoomDTO } from "../dto/UpdateRoomDTO";

export interface RoomRepository {
    create(data: CreateRoomDTO): Promise<Room>;

    findById(id: number): Promise<Room | null>;

    findAllByTheatreId(theatreId: number): Promise<Room[]>;

    findByName(
        theatreId: number,
        name: string
    ): Promise<Room | null>;

    exists(id: number): Promise<boolean>;

    update(id: number, data: UpdateRoomDTO): Promise<Room>;

    delete(id: number): Promise<void>;
}