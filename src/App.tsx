import { useState } from "react"
import { Button } from "./Button";

function App() {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((total) => total + 1)
  }

  return (
    <div>
      <p>Total: {total}</p>

      <Button onClick={incrementar} tamanho='1.25rem'>
        Incrementar
      </Button>
    </div>
  )
}

export default App
