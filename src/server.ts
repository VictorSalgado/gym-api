import "dotenv/config";
import App from "./app";

App.app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});
