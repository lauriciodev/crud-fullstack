import express from "express";
import getUser from "../controllers/userControllers"
const router = express.Router();


router.get("/",getUsers);

export default router;