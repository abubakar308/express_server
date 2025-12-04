import express from "express";
import { todosController } from "./todo.controller";

const router = express.Router();

router.post("/", todosController.createTodo);

// router.get("/", );

// router.get("/:id", );

// router.put("/:id", );

// router.delete("/:id", );


export const todosRoutes = router;