import { Theatre } from "@prisma/client";
import { CreateTheatreDTO } from "../dto/CreateTheatreDTO";
import { UpdateTheatreDTO } from "../dto/UpdateTheatreDTO";

export interface TheatreRepository {
  create(data: CreateTheatreDTO): Promise<Theatre>;

  findAll(): Promise<Theatre[]>;

  findById(id: number): Promise<Theatre | null>;

  update(id: number, data: UpdateTheatreDTO): Promise<Theatre>;

  delete(id: number): Promise<void>;

  findNearby(
    latitude: number,
    longitude: number,
    radiusInKm?: number
  ): Promise<Theatre[]>;
}