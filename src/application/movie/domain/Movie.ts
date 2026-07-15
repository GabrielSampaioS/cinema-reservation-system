export class Movie {
    constructor(
        public readonly id: string,
        public title: string,
        public description : string,
        public durationInMinutes: number,
        public genre: string,
        public createdAt: Date

    ) { }
}