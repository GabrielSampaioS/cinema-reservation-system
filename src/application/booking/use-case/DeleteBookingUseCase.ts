import { BookingRepository } from "../domain/BookingRepository";

export class DeleteBookingUseCase {


constructor(
 private repository: BookingRepository
){}


async execute(id:number){

 await this.repository.delete(id);

}


}