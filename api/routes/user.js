import express from "express";
import {addUsers, deleteUser, getUsers, updateUser} from "../controllers/userControllers.js"
const router = express.Router();


router.get("/",getUsers);
router.post("/",addUsers);
router.put("/", updateUser);
router.delete("/",deleteUser);

export default router;