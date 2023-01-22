import express from "express";
const app = express();
import userRouter from "./routes/user.js"
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/",userRouter);

app.listen(8080,(erro) =>{
  if(erro){
    console.log(erro);
  }else{
    console.log("servidor inciado com sucesso!");
  }
})
