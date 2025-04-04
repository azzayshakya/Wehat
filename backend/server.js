import http from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const port = process.env.PORT ;
console.log(port)

const server = http.createServer(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
