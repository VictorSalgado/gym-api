import { v4 as uuidv4 } from "uuid";

export class User {

    public readonly userId: string;
    public name: string;
    public mail: string;
    public password: string;
    public role: string;

    constructor(name: string, mail: string, password: string, role: string) {

        this.userId = uuidv4();
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
