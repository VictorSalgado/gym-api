import App from "../../../app";
import { Session } from "./../models/sessions";

export class SessionsRepository {

    public async getSessions(): Promise<Session[]> {

        const sql = "SELECT * FROM Session;";
        const params = [];

        return await new Promise((resolve, reject) => {
            App.database().all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows as Session[]);
            });
        });
    }

    public async getSessionById(sessionId: string): Promise<Session> {

        const sql = "SELECT * FROM Session WHERE sessionId = ?";
        const params = [sessionId];

        return await new Promise((resolve, reject) => {

            App.database().get(sql, params, (err, rows) => {

                if (err) {
                    reject(err);
                }

                resolve(rows as Session);
            });
        });
    }

    public async createSession(session: Session): Promise<Session> {

        const sql = "INSERT INTO User (sessionId, place, date, training, coach) VALUES (?,?,?,?,?);";
        const params = [session.sessionId, session.place, session.date, session.training, session.coach];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async editSession(session: Session): Promise<Session> {

        const sql = "UPDATE Session SET training = ?, date = ?, coach = ?, place = ? WHERE sessionId = ?";
        const params = [session.training, session.date, session.coach, session.place, session.sessionId];

        return await new Promise((resolve, reject) => {

            App.database().run(sql, params, (err, result) => {

                if (err) {
                    reject(err);
                }

                resolve(result);
            });
        });
    }

    public async deleteSession(sessionId: string): Promise<void> {

        const sql = "DELETE FROM Session WHERE userId = ?";
        const params = [sessionId];

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
