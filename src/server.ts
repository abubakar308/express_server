import express, {Request, Response} from "express";
import {Pool} from "pg";
import config from "./config";
import initDb, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todosRoutes } from "./modules/todo/todo.routes";
import { authRouters } from "./modules/auth/auth.routes";

const app = express();

const port = config.port;

//parser
app.use(express.json());
// app.use(express.urlencoed());

initDb();


app.get("/", logger, (req: Request, res: Response) => {
  res.send('Hello from developer')
});

app.use("/users", userRoutes);

app.use("/todos", todosRoutes)

app.use("/auth", authRouters);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
