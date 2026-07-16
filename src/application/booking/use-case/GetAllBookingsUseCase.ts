import { BookingRepository } from "../domain/BookingRepository";

export class GetAllBookingsUseCase {

constructor(
 private repository: BookingRepository
){}


async execute(){

 return this.repository.findAll();

}

}