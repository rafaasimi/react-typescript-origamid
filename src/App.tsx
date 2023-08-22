import { Content } from './Content';
import { UIContextProvider } from './Context/UIContext';
import { UserContextProvider } from './Context/UserContext';
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
      <UserContextProvider>
        <Header />
        <Content />
      </UserContextProvider>
    </UIContextProvider>
  );
}

export default App;
