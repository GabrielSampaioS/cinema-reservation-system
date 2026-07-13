import { Seat } from "../../../domain/entities/Seat";

export class Room {
    constructor(
        public readonly id: string,
        public name: string,
        public capacity : number,
        public createdAt : Date,
        private seats: Seat[]
    ) { }

    getSeats() {
        return this.seats;
    }
} 