import { Session } from "../models/sessions";

export interface ISessionsRepository {

    createSession(session: Session): Promise<Session>;
    getSessions(): Promise<Session[]>;
    getSessionById(id: string): Promise<Session>;
    updateSession(session: Session): Promise<Session>;
    deleteSession(id: string): Promise<boolean>;
}
