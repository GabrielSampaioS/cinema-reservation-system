import { Booking } from "../../../generated/prisma/client";
import { BaseMapper } from "../../../shared/mapper/BaseMapper";
import { BookingResponseDTO } from "../dto/BookingResponseDTO";

export class BookingMapper extends BaseMapper<Booking, BookingResponseDTO> {
    toDTO(booking: Booking): BookingResponseDTO {
        return {
            idClient: booking.clientId,
            idBooking: booking.idBooking,
            idSeat: booking.seatId,
            createdAt: booking.createdAt,
            statusId: booking.statusId,
            idSession: booking.sessionId,
        };
    }
}
