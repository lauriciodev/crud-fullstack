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

export const addUsers = (req,res) =>{
  const q = "insert into usuarios (`nome`,`email`,`data_nasc`) values(?))";

  const values ={
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nasc,
  }

  db.query(q,[values],(erro) =>{
    if(erro){
      return res.json(erro);
    }else{
      return res.status(200).json("usuario criado com sucesso!")
    }
  })



}

