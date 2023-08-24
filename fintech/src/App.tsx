import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { Resumo } from './pages/Resumo';
import './styles.css';

function App() {
  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </>
  );
}

export default App;
