import React from 'react';
import styled from "styled-components";
import axios from "axios"
import {FaTrash,FaEdit} from "react-icons/fa"
import {toast } from 'react-toastify';


const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
border-radius: 5px;
max-width: 800px;
margin: 10px;
word-break: break-all;
`
const Thead = styled.thead`

`;
const Tr = styled.tr`

`;
const Th = styled.th`

text-align: center;
border-bottom: inset;
padding-bottom: 4px;

@media (max-width: 500px) {
  ${(props) => props.onlyWeb && "display:none"}

}`;

const Tbody = styled.tbody`

`;
const Td = styled.td`
padding-top:15px ;
text-align: ${(props) => (props.alignCenter ? "center" :"start")};
width: ${(props) => (props.width ? props.width : "auto")};

@media (max-width:500px) {
  ${(props) => props.onlyWeb && "display:none"}

}


`;



const Grid = ({users,setUsers}) =>{

  const handleDelete = async (id) =>{
    await axios
    .delete("http://localhost:8080/" + id)
    .then(({data}) =>{
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success(data);
    })
  }

return(
<Table>
  <Thead>
    <Tr>
      <th>Nome</th>
      <th>Email</th>
      <th onlyWeb>Telefone</th>
      <th></th>
      <th></th>
    </Tr>
  </Thead>

  <Tbody>
    {users.map((item,i) =>{
      <tr key={i}>
        <td width="30%">{item.nome}</td>
        <td width="30%">{item.Email}</td>
        <td width="30%" onlyWeb>{item.Telefone}</td>
        <td alignCenter width="5%">
    <FaEdit />
        </td>
        <td alignCenter width="5%">
    <FaTrash onClick={() => handleDelete(item.id)}  />
        </td>
      </tr>
    })}

  </Tbody>

</Table>
)
}


export default Grid;
