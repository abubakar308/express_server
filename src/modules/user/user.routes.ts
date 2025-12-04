import express from "express";

import { userCointroler } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/", userCointroler.createUser);

router.get("/", logger, auth("admin"),  userCointroler.getUser);

router.get("/:id", userCointroler.getSingleUser);

router.put("/:id", userCointroler.updateUser);

router.delete("/:id",userCointroler.deleteUser)


export const userRoutes = router;