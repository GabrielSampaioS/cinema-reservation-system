import { BookingRepository } from "../domain/BookingRepository";
import { UpdateBookingDTO } from "../dto/UpdateBookingDTO";


export class UpdateBookingUseCase {


constructor(
 private repository: BookingRepository
){}



async execute(
 id:number,
 data:UpdateBookingDTO
){

 return this.repository.update(id,data);

}


}