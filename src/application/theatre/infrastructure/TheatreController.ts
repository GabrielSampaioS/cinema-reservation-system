import { Request, Response } from "express";

import { CreateTheatreUseCase } from "../use-case/CreateTheatreUseCase";
import { GetAllTheatresUseCase } from "../use-case/GetAllTheatresUseCase";
import { GetTheatreByIdUseCase } from "../use-case/GetTheatreByIdUseCase";
import { UpdateTheatreUseCase } from "../use-case/UpdateTheatreUseCase";
import { DeleteTheatreUseCase } from "../use-case/DeleteTheatreUseCase";
import { GetNearbyTheatresUseCase } from "../use-case/GetNearbyTheatresUseCase";

export class TheatreController {
    constructor(
        private readonly createTheatreUseCase: CreateTheatreUseCase,
        private readonly getAllTheatresUseCase: GetAllTheatresUseCase,
        private readonly getTheatreByIdUseCase: GetTheatreByIdUseCase,
        private readonly updateTheatreUseCase: UpdateTheatreUseCase,
        private readonly deleteTheatreUseCase: DeleteTheatreUseCase,
        private readonly getNearbyTheatresUseCase: GetNearbyTheatresUseCase,
    ) { }

    async create(req: Request, res: Response) {

        const theatre = await this.createTheatreUseCase.execute(req.body);

        return res.status(201).json(theatre);
    }

    async findAll(req: Request, res: Response) {
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


}