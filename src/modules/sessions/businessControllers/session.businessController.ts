import { Session } from "../models/sessions";
import { SessionsRepository } from "../repositories/sessions.repository";

export class SessionBusinessController {

    private sessionRepository: SessionsRepository;

    constructor(userRepository: SessionsRepository = new SessionsRepository()) {
        this.sessionRepository = userRepository;
    }

    public async getSessions(): Promise<Session[]> {
        return this.sessionRepository.getSessions();
    }
}
