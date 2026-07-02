export class Cliente{
    constructor(
        public readonly id: string,
        public name: string,
        public email: string,
        public readonly passwordHash : string,
        public readonly createdAt: Date
    ) {}
}