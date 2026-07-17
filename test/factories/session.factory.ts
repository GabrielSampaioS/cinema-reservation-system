let counter = 1;

export function makeSessionData(
    movieId: number,
    roomId: number,
    price  : number,
    overrides = {}
) {

    return {
        movieId,
        roomId,
        startTime: new Date("2026-07-20T19:00:00"),
        price, 
        ...overrides,
    };

}