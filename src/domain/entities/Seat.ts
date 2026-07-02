export class Seat {
    constructor(
        public readonly id: string,
        public readonly row: string,
        public readonly number: number,
        public readonly createdAt : Date
    ) { }
    
    getLabel() {
        return `${this.row}${this.number}`;
    }
}