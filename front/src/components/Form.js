import React, {useEffect, useRef} from 'react';
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



const Form = ({onEdit}) =>{
  const ref = useRef();
  return(
    <FormContainer ref={ref}>
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
