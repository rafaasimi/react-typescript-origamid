import { useEffect, useState } from 'react';
import { Button } from './Hooks/useState/Button';

function user() {
  return {
    nome: 'Rafael',
    profissao: 'Engenheiro',
  };
}

type User = {
  nome: string;
  profissao: string;
};

function App() {
  const [data, setData] = useState<null | User>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <Button incrementar={setTotal}/>
      </div>
      {data && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
}

export default App;
