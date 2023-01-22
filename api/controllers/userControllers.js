import {db} from "../database.js"

export const getUsers = (_,res) =>{

const q = "select * from usuarios";

db.query(q,(erro,data) =>{
  if(erro){
    return res.json(erro)
  }else{
    return res.status(200).json(data);
  }
})

};

