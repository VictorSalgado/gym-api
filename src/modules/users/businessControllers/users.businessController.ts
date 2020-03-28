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
}
