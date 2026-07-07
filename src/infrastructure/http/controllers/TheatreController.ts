import { Request, Response } from "express";

import { CreateTheatreUseCase } from "../../../application/use-cases/theatre/CreateTheatreUseCase";
/*import { GetAllTheatresUseCase } from "@/application/use-cases/theatre/GetAllTheatresUseCase";
import { GetTheatreByIdUseCase } from "@/application/use-cases/theatre/GetTheatreByIdUseCase";
import { UpdateTheatreUseCase } from "@/application/use-cases/theatre/UpdateTheatreUseCase";
import { DeleteTheatreUseCase } from "@/application/use-cases/theatre/DeleteTheatreUseCase";
import { GetNearbyTheatresUseCase } from "@/application/use-cases/theatre/GetNearbyTheatresUseCase";
import { CreateRoomUseCase } from "@/application/use-cases/theatre/CreateRoomUseCase";
import { GetRoomsByTheatreUseCase } from "@/application/use-cases/theatre/GetRoomsByTheatreUseCase";*/

export class TheatreController {
    //todo> criar uma factory para injetar apenas 1 
    constructor(
        private readonly createTheatreUseCase: CreateTheatreUseCase,
        /*private readonly getAllTheatresUseCase: GetAllTheatresUseCase,
        private readonly getTheatreByIdUseCase: GetTheatreByIdUseCase,
        private readonly updateTheatreUseCase: UpdateTheatreUseCase,
        private readonly deleteTheatreUseCase: DeleteTheatreUseCase,
        private readonly getNearbyTheatresUseCase: GetNearbyTheatresUseCase,
        private readonly createRoomUseCase: CreateRoomUseCase,
        private readonly getRoomsByTheatreUseCase: GetRoomsByTheatreUseCase*/
    ) {}

    async create(req: Request, res: Response) {

        const theatre = await this.createTheatreUseCase.execute(req.body);

        return res.status(201).json(theatre);
    }

    /*async findAll(req: Request, res: Response) {
        const theatres = await this.getAllTheatresUseCase.execute();

        return res.status(200).json(theatres);
    }

    async findById(req: Request, res: Response) {
        const { theatreId } = req.params;

        const theatre = await this.getTheatreByIdUseCase.execute(Number(theatreId));

        return res.status(200).json(theatre);
    }

    async update(req: Request, res: Response) {
        const { theatreId } = req.params;

        const theatre = await this.updateTheatreUseCase.execute(
            Number(theatreId),
            req.body
        );

        return res.status(200).json(theatre);
    }

    async delete(req: Request, res: Response) {
        const { theatreId } = req.params;

        await this.deleteTheatreUseCase.execute(Number(theatreId));

        return res.sendStatus(204);
    }

    async nearby(req: Request, res: Response) {
        const latitude = Number(req.query.latitude);
        const longitude = Number(req.query.longitude);

        const theatres = await this.getNearbyTheatresUseCase.execute(
            latitude,
            longitude
        );

        return res.status(200).json(theatres);
    }

    async createRoom(req: Request, res: Response) {
        const { theatreId } = req.params;

        const room = await this.createRoomUseCase.execute(
            Number(theatreId),
            req.body
        );

        return res.status(201).json(room);
    }

    async getRooms(req: Request, res: Response) {
        const { theatreId } = req.params;

        const rooms = await this.getRoomsByTheatreUseCase.execute(
            Number(theatreId)
        );

        return res.status(200).json(rooms);
    }*/
}