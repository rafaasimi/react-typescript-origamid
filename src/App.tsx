import { useState } from "react"
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  const [total, setTotal] = useState(0);

  const [data, setData] = useState('');

  function incrementar() {
    setTotal((total) => total + 1)
  }

  return (
    <div>
      <p>Total: {total}</p>
      <p>Início da viagem: {data}</p>

      <Button id="botao-principal" className="btn" onClick={incrementar} tamanho='1.25rem'>
        Incrementar
      </Button>

      <Input id="email" label="E-mail" type="email"/>
      <Input id="senha" label="Senha" type="password"/>
      <Input value={data} onChange={(event) => setData(event.currentTarget.value)} id="data" label="Data" type="date"/>
      <Input id="horario" label="Horário" type="time"/>
    </div>
  )
}

export default App
