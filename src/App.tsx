import { useEffect, useState } from 'react';
import { Input } from './Hooks/useState/InputExercicio';

type Venda = {
  id: string;
  nome: string;
  status: string;
};

function App() {
  const [data, setData] = useState<null | Venda[]>(null);
  const [dateInicio, setDateInicio] = useState('');
  const [dateFinal, setDateFinal] = useState('');

  useEffect(() => {
    if (dateInicio && dateFinal) {
      fetch(`https://data.origamid.dev/vendas?inicio=${dateInicio}&final=${dateFinal}`)
      .then((response) => response.json())
      .then((json) => setData(json as Venda[]))
      .catch(error => console.log(error))
    }
  }, [dateInicio, dateFinal]);


  return (
    <div>
      <Input
        id="dataInicio"
        label="Data início:"
        setDate={setDateInicio}
        type="date"
        value={dateInicio}
      />
      <Input
        id="dataFinal"
        label="Data final:"
        setDate={setDateFinal}
        type="date"
        value={dateFinal}
      />

      <ul>
        {data &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
