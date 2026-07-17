let counter = 1;

export function makeBookingData(
    clientId: number,
    sessionId: number,
    seatId: number,
    overrides = {}
) {
    return {
        clientId,
        sessionId,
        seatId,
        statusId: 1,
        reference: `BOOK-${counter++}`,
        ...overrides,
    };
}