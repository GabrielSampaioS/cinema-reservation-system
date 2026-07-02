import { Room } from "./Room";

export class Theatre {
    constructor(
        public readonly id: string,
        public name : string,
        public latitude: string,
        public longitude : string,
        private rooms: Room[]
    ) { }

    getRooms() : Room[]{
        return this.rooms
    }
}