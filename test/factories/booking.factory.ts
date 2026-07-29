
export function makeBookingData(overrides = {}) {
    return {
        clientId : 1,
        sessionId : 1,
        seatId :1,
        ...overrides,
    };
}