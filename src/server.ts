import "dotenv/config";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as path from "path";
import * as util from "util";
import App from "./app";

// App.app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}!`);
// });

const readFile = util.promisify(fs.readFile);

const httpsServer = https.createServer({
    cert: fs.readFileSync(path.join(__dirname, "/keys/server.crt")),
    key: fs.readFileSync(path.join(__dirname, "/keys/key.pem")),
}, App.app);

httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
});

const httpServer = http.createServer(App.app);

httpServer.listen(3000, () => {
    console.log("HTTP Server running on port 3000");
});

function stop() {
    httpServer.close();
}

export default httpServer;
