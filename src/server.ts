import "dotenv/config";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as path from "path";
import * as util from "util";
import App from "./app";

const PORT = 443;

const httpsOptions = {
    cert: fs.readFileSync("./config/cert.crt"),
    key: fs.readFileSync("./config/cert.key")
};

const httpsServer = https.createServer(httpsOptions, App.app).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});

export default httpsServer;

// const readFile = util.promisify(fs.readFile);

// const httpsServer = https.createServer({
//     cert: fs.readFileSync("./config/cert.pem"),
//     key: fs.readFileSync("./config/key.pem")
// }, App.app);

// httpsServer.listen(443, () => {
//     console.log("HTTPS Server running on port 443");
// });

// const httpServer = http.createServer(App.app);

// httpServer.listen(3000, () => {
//     console.log("HTTP Server running on port 3000");
// });

// function stop() {
//     httpServer.close();
// }

// export default httpServer;
