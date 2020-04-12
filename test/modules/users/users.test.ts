import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import httpServer from "../../../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

after(async () => {
    httpServer.close();
});

describe("User Service", () => {

    it("Getting all users", async () => {

        const res = await chai.request(httpServer).get("/users");

        expect(res.body).not.to.be.empty;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body[0]).to.have.deep.property('role', 'ATHLETE');
    });

    it("Getting user by id NOT_FOUND", async () => {

        const res = await chai.request(httpServer).get("/users/prueba");

        expect(res.status).to.equal(404);
        expect(res.body).not.to.be.empty;
        expect(res.body.message).to.be.equal("NOT_FOUND");
    });

    it("Getting user by id", async () => {

        const res = await chai.request(httpServer).get("/users/d1814df9-2bc7-4b9a-8392-931cea8cd9fe");

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.have.deep.property('user_id');
        expect(res.body).to.have.deep.property('name');
        expect(res.body).to.have.deep.property('password');
        expect(res.body).to.have.deep.property('mail');
        expect(res.body).to.have.deep.property('role');
    });
});
