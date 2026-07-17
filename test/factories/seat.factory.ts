let counter = 1;

export function makeSeatData(overrides = {}) {
    return {
        row: 1,
        number: counter++,
        ...overrides,
    };
}

