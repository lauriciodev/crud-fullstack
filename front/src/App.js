import GlobalStyle from "./styles/global";
import styled from 'styled-components';
import Grid from "./components/Grid";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form.js"
import { useEffect, useState } from 'react';
import axios from 'axios';


//styles
const Container = styled.div`
width:100%;
max-width: 800px;
margin: 0 auto;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`
const Title = styled.h2``;

function App() {

  const [users,setUsers] = useState([]);
  const [onEdit,setOnEdit] = useState(null);

const getUsers = async () =>{
try{
const res = await axios.get("http://localhost:8080");
setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
}catch(erro){
 toast.erro(erro);
}

}

useEffect(() =>{
  getUsers();
},[setUsers]);
 

  return (
    <div className="App">
      <Container>
        <Title>Usuários</Title>
        <Form/>
        <Grid users={users} setUsers={setUsers}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </div>
  );
}

export default App;
