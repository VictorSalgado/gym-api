import { User, UserRole } from "../models/users";

export class UsersRepository {

    public mockUsers: User[] = [
        {
            mail: "edu.blanco@test.com",
            name: "eduBlanco",
            password: "pass1234",
            role: UserRole.ATHLETE,
            userId: "1"
        },
        {
            mail: "victor.salgado@test.com",
            name: "victorSalgado",
            password: "pass1234",
            role: UserRole.ATHLETE,
            userId: "2"
        },
        {
            mail: "adri.blanco@test.com",
            name: "adriBlanco",
            password: "pass1234",
            role: UserRole.COACH,
            userId: "3"
        }
    ];

    public async getUsers(): Promise<User[]> {
        return this.mockUsers;
    }

    public async getUserById(userId: string): Promise<User> {
        return this.mockUsers.find((user) => user.userId === userId);
    }

    public async createUser(user: User): Promise<void> {
        this.mockUsers.push(user);
    }
}
