export class Todo {
    constructor (
        public UserId: number,
        public id: number,
        public title: string,
        public completed: boolean,   
    ) {}
}
