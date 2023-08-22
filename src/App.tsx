import { UIContextProvider } from './Context/UIContext';
import { Header } from './Header';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  internacional: boolean;
};

function App() {
  return (
    <UIContextProvider>
      <Header />
    </UIContextProvider>
  );
}

export default App;
