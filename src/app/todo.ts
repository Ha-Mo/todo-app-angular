export class Todo {
    /*constructor(
        public UserId: number,
        public id: number,
        public title: string,
        public completed: boolean,
    ) {}*/
    UserId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
