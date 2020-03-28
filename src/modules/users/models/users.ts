import { v4 as uuidv4 } from "uuid";

export enum UserRole {
    ATHLETE = 0,
    COACH = 1
}

export class User {

    public readonly userId: string;
    public name: string;
    public mail: string;
    public password: string;
    public role: UserRole;

    constructor(name: string, mail: string, password: string, role: UserRole) {

        this.userId = uuidv4();
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
