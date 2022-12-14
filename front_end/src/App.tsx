import { Container } from '@mui/material';
import { Header } from "./components/Header";
import { Main } from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </>
  );
}

export default App;
