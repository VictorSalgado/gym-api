import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import httpServer from "../../../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

after(async () => {
    httpServer.close();
});

describe("Training Service", () => {

    it("Getting all trainings", async () => {

        const res = await chai.request(httpServer).get("/trainings");

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
    });
});
