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

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nasc,
  ]

  db.query(q,[values],(erro) =>{
    if(erro){
      return res.json(erro);
    }else{
      return res.status(200).json("usuario criado com sucesso!")
    }
  })

}


export const updateUser = (req,res) =>{
  const  q = "update usuarios set `nome` = ?, `email` = ?, `telefone` = ?, `data_nasc` = ? where `id` = ? "

 
  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nasc,
  ]

db.query(q,[...values,req.params.id], (erro) =>{
  if(erro){
    return res.json(erro)
  }else{
    return res.status(200).json("usuario atualizado com sucesso");
  }
} )

}

export const deleteUser = (req,res) =>{
const q = "delete from usuarios where `id`= ?";

db.query(q,[req.params.id], (erro) =>{
  if(erro){
    return json(erro);
  }else{
    return res.status(200).json("usuario deletado com sucesso!");
  }
})


} 