import express from "express";
const app = express();
import userRouter from "./routes/user.js"
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

