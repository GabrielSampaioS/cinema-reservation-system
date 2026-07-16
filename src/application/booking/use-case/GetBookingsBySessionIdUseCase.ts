import { BookingRepository } from "../domain/BookingRepository";

export class GetBookingsBySessionIdUseCase {


constructor(
 private repository: BookingRepository
){}


async execute(sessionId:number){

 return this.repository.findAllBySessionId(sessionId);

}

}