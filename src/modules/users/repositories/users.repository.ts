export class UsersRepository {

    public async getUsers() {

        const mockUsers = [
            {
                mail: "edu.blanco@test.com",
                name: "eduBlanco",
                password: "pass1234",
                role: "ATHLETE",
                userId: "1"
            },
            {
                mail: "victor.salgado@test.com",
                name: "victorSalgado",
                password: "pass1234",
                role: "ATHLETE",
                userId: "2"
            },
            {
                mail: "adri.blanco@test.com",
                name: "adriBlanco",
                password: "pass1234",
                role: "COACH",
                userId: "3"
            }
        ];

        return mockUsers;
    }
}
