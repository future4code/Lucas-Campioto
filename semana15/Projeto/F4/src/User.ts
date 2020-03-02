import { Users } from "./users";

export abstract class User implements Users {
    constructor (
        public name: string,
        public email: string,
        public birthDate: string,
    ) {}
}
