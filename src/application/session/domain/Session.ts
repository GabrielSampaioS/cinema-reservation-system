//import { Booking } from "/../../modules/booking/domain/entities/Booking";

export class Session{
    //private bookings: Booking[] = [];
    
    constructor(
        public readonly id: string,
        public readonly movieId: string,
        public readonly theatreId: string,
        public startTime: Date,
        public price: number,
        public createdAt : Date
    ) { }

} 