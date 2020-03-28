import { UserRole } from "./../../users/models/users";
import { Session } from "./../models/sessions";

export class SessionsRepository {

    public async getSessions(): Promise<Session[]> {

        const mockSession: Session[] = [
            {
                athletes: [
                    {
                        mail: "edu.blanco@test.com",
                        name: "eduBlanco",
                        password: "pass1234",
                        role: UserRole.ATHLETE,
                        userId: "1"
                    },
                    {
                        mail: "victor.salgado@test.com",
                        name: "victorSalgado",
                        password: "pass1234",
                        role: UserRole.ATHLETE,
                        userId: "2"
                    }
                ],
                coach: {
                    mail: "adri.blanco@test.com",
                    name: "adriBlanco",
                    password: "pass1234",
                    role: UserRole.COACH,
                    userId: "3"
                },
                date: null,
                place: "BLANCO'S HOUSE",
                sessionId: "1",
                training: null
            }
        ];
        return mockSession;
    }
}
