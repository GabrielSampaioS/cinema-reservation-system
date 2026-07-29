let counter = 1;

export function makeSessionData(overrides = {}
) {

    return {
        movieId : 1,
        roomId : 1 ,
        startTime: new Date("2026-07-20T19:00:00"),
        price : 10,
        ...overrides,
    };

}