import { Collection, Db } from "mongodb";
import { IUsersRepository } from "../interfaces/users.repository";
import { User } from "../models/users";

export class MongoUsersRepository implements IUsersRepository {

    public collection: Collection;

    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    public async createUser(user: User): Promise<User> {
        return await this.collection.insert(user);
    }

    public async getUsers(): Promise<User[]> {
        return await this.collection.find().toArray();
    }

    public async getUserById(id: string): Promise<User> {
        return await this.collection.find({ userId: id });
    }

    public async updateUser(user: User): Promise<User> {

        return await this.collection.update({ userId: user.userId }, {
            $set: {
                mail: user.mail,
                name: user.name,
                password: user.password,
                role: user.role
            }
        });
    }

    public async deleteUser(id: string): Promise<boolean> {
        return await this.collection.deleteOne({ userId: id });
    }
}
