import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../contexts/DataContext';
import { Loading } from '../components/Loading';

type VendaSemData = Omit<IVenda, 'data'>

export function Venda() {
  const { id } = useParams();

  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if(loading === true) return <Loading />
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
}
