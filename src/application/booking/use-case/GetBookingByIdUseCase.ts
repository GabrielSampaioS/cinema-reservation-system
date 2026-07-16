import { BookingRepository } from "../domain/BookingRepository";

export class GetBookingByIdUseCase {


constructor(
 private repository: BookingRepository
){}


async execute(id:number){

 const booking = await this.repository.findById(id);


 if(!booking){
    throw new Error("Booking not found");
 }


 return booking;

}

}