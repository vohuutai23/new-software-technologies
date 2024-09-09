import express from "express";
import { createUser, getAllUsers } from "../controller/usersController.js";

const router = express.Router();

//create user
router.post("/", createUser);
// get all user
router.get("/", getAllUsers);

export { router as usersRoutes };
