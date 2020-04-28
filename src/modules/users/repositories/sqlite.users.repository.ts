import App from "../../../app";
import { IUsersRepository } from "../interfaces/users.repository";
import { User } from "../models/users";

export class SQLiteUsersRepository implements IUsersRepository {

    public async getUsers(): Promise<User[]> {

        const sql = "SELECT * FROM User;";
        const params = [];

        return await new Promise((resolve, reject) => {

            App.database().all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows as User[]);
            });
        });
    }

    public async getUserAuth(name: string, password): Promise<User> {

        const sql = "SELECT * FROM User WHERE name = ? AND password = ?;";
        const params = [name, password];

        return await new Promise((resolve, reject) => {

            App.database().get(sql, params, (err, rows) => {

                if (err) {
                    reject(err);
                }

                resolve(rows as User);
            });
        });
    }

    public async getUserById(userId: string): Promise<User> {

        const sql = "SELECT * FROM User WHERE user_id = ?";
        const params = [userId];

        return await new Promise((resolve, reject) => {

            App.database().get(sql, params, (err, rows) => {

                if (err) {
                    reject(err);
                }

                resolve(rows as User);
            });
        });
    }

    public async createUser(user: User): Promise<User> {

        const sql = "INSERT INTO User (user_id, name, password, mail, role) VALUES (?,?,?,?,?);";
        const params = [user.userId, user.name, user.password, user.mail, user.role];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async updateUser(user: User): Promise<User> {

        const sql = "UPDATE User SET name = ?, mail = ?, password = ?, role = ? WHERE user_id = ?";
        const params = [user.name, user.mail, user.password, user.role, user.userId];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async deleteUser(userId: string): Promise<void> {

        const sql = "DELETE FROM User WHERE user_id = ?";
        const params = [userId];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, rows) => {

                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    }
}
