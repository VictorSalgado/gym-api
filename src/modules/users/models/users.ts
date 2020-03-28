export class User {

    public readonly userId: string;
    public name: string;
    public mail: string;
    public password: string;
    public role: string;

    constructor(userId: string, name: string, mail: string, password: string, role: string) {

        this.userId = userId;
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
