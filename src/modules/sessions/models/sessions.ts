import { User } from "./../../users/models/users";

export class Session {

    public readonly sessionId: string;
    public date: Date;
    public coach: User;
    public place: string;
    public training: any;

    constructor(sessionId: string, date: Date, coach: User, place: string, training: any) {

        this.sessionId = sessionId;
        this.date = date;
        this.coach = coach;
        this.place = place;
        this.training = training;
    }
}
