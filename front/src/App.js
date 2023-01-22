import GlobalStyle from "./styles/global";
import styled from 'styled-components';
import Grid from "./components/Grid";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form.js"


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
  return (
    <div className="App">
      <Container>
        <Title>Usuários</Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </div>
  );
}

export default App;
