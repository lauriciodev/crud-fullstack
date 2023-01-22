import express from "express";
import {addUsers, getUsers} from "../controllers/userControllers.js"
const router = express.Router();


router.get("/",getUsers);
router.post("/usuarios",addUsers);

export default router;