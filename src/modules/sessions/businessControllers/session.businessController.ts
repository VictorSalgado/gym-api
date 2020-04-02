import { Session } from "../models/sessions";
import { SessionsRepository } from "../repositories/sessions.repository";

export class SessionBusinessController {

    private sessionRepository: SessionsRepository;

    constructor(userRepository: SessionsRepository = new SessionsRepository()) {
        this.sessionRepository = userRepository;
    }

    public async getSessions(): Promise<Session[]> {
        try {
            return await this.sessionRepository.getSessions();
        } catch (error) {
            throw new Error(error);
        }
    }

    public async getSessionById(sessionId: string): Promise<Session> {
        try {
            return await this.sessionRepository.getSessionById(sessionId);
        } catch (error) {
            throw new Error(error);
        }
    }

    public async createSession(session: Session): Promise<Session> {
        try {
            await this.sessionRepository.createSession(session);
            return session;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async updateSession(session: Session): Promise<Session> {
        try {
            await this.sessionRepository.updateSession(session);
            return session;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async deleteSession(sessionId: string): Promise<Session> {
        try {
            await this.sessionRepository.deleteSession(sessionId);
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
}
