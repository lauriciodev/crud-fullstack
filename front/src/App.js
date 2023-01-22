import GlobalStyle from "./styles/global";
import styled from 'styled-components';
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//styles
const Container = styled.div`
width:100%;
max-width: 800px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`


function App() {
  return (
    <div className="App">
      <Container>

      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle/>
    </div>
  );
}

export default App;
