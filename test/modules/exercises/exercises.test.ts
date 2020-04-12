import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import httpServer from "../../../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

after(async () => {
    httpServer.close();
});

describe("Exercise Service", () => {

    it("Getting all exercises", async () => {

        const res = await chai.request(httpServer).get("/exercises");

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
    });
});
