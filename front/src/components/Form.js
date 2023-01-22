import axios from 'axios';
import React, {useEffect, useRef} from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormContainer = styled.form`
display: flex;
align-items:center;
gap: 10px;
flex-wrap: wrap;
background-color: azure;
padding: 10px;
box-shadow: 0px 1px 5px #ccc;
border-radius: 10px;
`

const InputArea = styled.div`
display: flex;
flex-direction: column;
`
const Label = styled.label`

`
const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #bbbb;
border-radius: 4px;
height: 40px;
`
const Button = styled.button`
background-color: #333;
padding: 10px;
cursor: pointer;
border: none;
color: white;
height: 45px;
border-radius: 10px;

`



const Form = ({getUsers,onEdit, setOnEdit}) =>{
  const ref = useRef();


useEffect(() =>{
  if(onEdit){
    const user = ref.current;
    user.nome.value = onEdit.nome
    user.email.value = onEdit.email
    user.telefone.value = onEdit.telefone
    user.data_nasc.value = onEdit.data_nasc
  }
},[onEdit]);

const handleSubmit = async (e) =>{
  e.preventDefault();


  const user = ref.current;

  if(!user.nome.value ||
    !user.email.value ||
    !user.telefone.value ||
    !user.data_nasc.value
    ){
      return toast.warn("preencha todos os campos");
    }


if(onEdit){
  await axios
  .put("http://localhost:8080/"+ onEdit.id,{
    nome:user.nome.value,
    email:user.email.value,
    telefone:user.telefone.value,
    data_nasc:user.data_nasc.value,
  }).then(({data}) => toast.success(data))
  .catch(({data}) => toast.error(data));
}else{
  await axios
  .post("http://localhost:8080/",{
    nome:user.nome.value,
    email:user.email.value,
    telefone:user.telefone.value,
    data_nasc:user.data_nasc.value,
  }).then(({data}) => toast.success(data))
  .catch(({data}) => toast.error(data));
}


    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";
    user.data_nasc.value = "";

    setOnEdit(null);
    getUsers();

}

  return(
    <FormContainer ref={ref} onSubmit={handleSubmit}>
    <InputArea>
      <Label>Nome</Label>
      <Input name="nome"/>
    </InputArea>
    <InputArea>
      <Label>Email</Label>
      <Input name="Email"/>
    </InputArea>
    <InputArea>
      <Label>Telefone</Label>
      <Input name="Telefone"/>
    </InputArea>
    <InputArea>
      <Label>Data de nascimento</Label>
      <Input name="data_nasc" type="date" />
    </InputArea>
    <Button type="submit">Salvar</Button>
    </FormContainer>

  );
};

export default Form;
