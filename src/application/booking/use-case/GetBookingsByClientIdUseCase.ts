import { BookingRepository } from "../domain/BookingRepository";

export class GetBookingsByClientIdUseCase {


constructor(
 private repository: BookingRepository
){}


async execute(clientId:number){

 return this.repository.findAllByClientId(clientId);

}

}