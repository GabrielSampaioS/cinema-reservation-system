let counter = 1;

export function makeRoomData(overrides = {}) {
    return {
        name: `Sala ${counter++}`,
        theatreId: 1,
        ...overrides,
    };
}