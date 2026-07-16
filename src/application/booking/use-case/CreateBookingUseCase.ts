import { BookingRepository } from "../domain/BookingRepository";
import { CreateBookingDTO } from "../dto/CreateBookingDTO";


export class CreateBookingUseCase {


constructor(
    private repository: BookingRepository
){}


async execute(
    data:CreateBookingDTO
){

    return this.repository.create(data);

}


}