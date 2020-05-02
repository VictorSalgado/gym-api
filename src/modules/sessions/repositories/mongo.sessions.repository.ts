import { Collection, Db } from "mongodb";
import { ISessionsRepository } from "../interfaces/sessions.repository";
import { Session } from "../models/sessions";

export class MongoSessionsRepository implements ISessionsRepository {

    public collection: Collection;

    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName);
    }

    public async createSession(session: Session): Promise<Session> {
        return await this.collection.insert(session);
    }

    public async getSessions(): Promise<Session[]> {
        return await this.collection.find().toArray();
    }

    public async getSessionById(id: string): Promise<Session> {
        return await this.collection.find({ sessionId: id });
    }

    public async updateSession(session: Session): Promise<Session> {
        return await this.collection.update({ sessionId: session.sessionId }, {
            $set: {
                coach: session.coach,
                date: session.date,
                place: session.place,
                training: session.training
            }
        });
    }

    public async deleteSession(id: string): Promise<boolean> {
        return await this.collection.deleteOne({ sessionId: id });
    }
}
