import { User } from "../models/users";
import { UsersRepository } from "../repositories/users.repository";

export class UsersBusinessController {

    private userRepository: UsersRepository;

    constructor(userRepository: UsersRepository = new UsersRepository()) {
        this.userRepository = userRepository;
    }

    public async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }

    public async getUserById(userId: string): Promise<User> {
        return this.userRepository.getUserById(userId);
    }

    public async createUser(user: User): Promise<User> {

        this.userRepository.createUser(user);
        return user;
    }
}
