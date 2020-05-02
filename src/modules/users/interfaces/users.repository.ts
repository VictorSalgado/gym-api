import { User } from "../models/Users";

export interface IUsersRepository {

    createUser(user: User): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUser(id: string): Promise<boolean>;
}
