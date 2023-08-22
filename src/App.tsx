import React from 'react';
import useFetch from './Hooks/custom_hooks/useFetch';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  internacional: boolean;
};

function App() {
  const [id, setId] = React.useState('p001');
  const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos');
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`, {
    cache: 'force-cache'
  });

  return (
    <div className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button key={produto.id} onClick={() => setId(produto.id)}>
              {produto.id} : {produto.nome}
            </button>
          ))}
      </div>
      <div>
        {produto.loading && <div>Carregando...</div>}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Preço: {produto.data.preco}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
            <li>
              É internacional? {produto.data.internacional ? 'Sim' : 'Não'}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
