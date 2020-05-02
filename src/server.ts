import "dotenv/config";
import * as fs from "fs";
import * as https from "https";
import App from "./app";

const httpsOptions = {
    cert: fs.readFileSync("./config/cert.crt"),
    key: fs.readFileSync("./config/cert.key")
};

const httpsServer = https.createServer(httpsOptions, App.app).listen(process.env.PORT, () => {
    console.log("Express server listening on port " + process.env.PORT);
});

export default httpsServer;
