import { Session } from "../models/sessions";

export interface ISessionsRepository {

    createSession(session: Session): Promise<Session>;
    getSessions(): Promise<Session[]>;
    getSessionById(sessionId: string): Promise<Session>;
    updateSession(session: Session): Promise<Session>;
    deleteSession(sessionId: string): Promise<void>;
}
