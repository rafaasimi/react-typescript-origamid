import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { DataContextProvider } from './contexts/DataContext';
import { Resumo } from './pages/Resumo';
import './styles.css';

function App() {
  return (
    <div className='container'>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </DataContextProvider>
    </div>
  );
}

export default App;
