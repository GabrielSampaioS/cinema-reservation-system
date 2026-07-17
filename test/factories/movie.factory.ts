let counter = 1;

export function makeMovieData(overrides = {}) {

    return {
        title: `Movie Test ${counter++}`,
        description: "Filme de teste para E2E",
        duration: 120,
        ...overrides,
    };

}