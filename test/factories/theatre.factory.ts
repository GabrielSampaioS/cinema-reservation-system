let counter = 1;

export function makeTheatreData(overrides = {}) {
    return {
        name: `Cinema Teste ${counter++}`,
        address: "Rua das Flores, 100",
        city: "Piracicaba",
        state: "SP",
        latitude: -22.7253,
        longitude: -47.6492,

        ...overrides,
    };
}