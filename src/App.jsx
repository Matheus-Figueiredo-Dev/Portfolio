import { Footer, Header } from './components';
import { Contato, Habilidades, Home, Projetos, Sobre } from './sections';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
