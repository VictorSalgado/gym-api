import { User } from "../models/Users";

export interface IUsersRepository {

    createUser(User: User): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(UserId: string): Promise<User>;
    updateUser(User: User): Promise<User>;
    deleteUser(UserId: string): Promise<void>;
}
