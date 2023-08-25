import { useData } from "../contexts/DataContext";

export function Resumo() {
  const {data} = useData();

  return (
    <h1>Resumo</h1>
  )
}