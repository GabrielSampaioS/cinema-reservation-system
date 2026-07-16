import { Seat } from "@prisma/client";

import { UpdateSeatDTO } from "../dto/UpdateSeatDTO";
import { CreateSeatDTO } from "../dto/CreateSeatDTO";


export interface SeatRepository {

    create(data: CreateSeatDTO): Promise<Seat>
    
    findById(id: number): Promise<Seat | null>

    findByIdRoom(id: number): Promise<Seat[] | null>

    update(id: number, data: UpdateSeatDTO): Promise<Seat>;

    delete(id: number): Promise<void>;

}