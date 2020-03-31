import App from "../../../app";
import { User } from "../models/users";

export class UsersRepository {

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

    public async getUserById(userId: string): Promise<User> {

        const sql = "SELECT * FROM User WHERE userId = ?";
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

        const sql = "INSERT INTO User (userId, name, password, mail, role) VALUES (?,?,?,?,?);";
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

    public async editUser(user: User): Promise<User> {

        const sql = "UPDATE User SET name = ?, mail = ?, password = ?, role = ? WHERE userId = ?";
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

        const sql = "DELETE FROM User WHERE userId = ?";
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
