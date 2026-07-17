let counter = 1;

export function makeClientData(overrides = {}) {
    return {
        name: "Gabriel Sampaio",
        email: `gabriel${counter++}@email.com`,
        passwordHash: "123456",
        ...overrides,
    };
}