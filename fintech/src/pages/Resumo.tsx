import { useData } from "../contexts/DataContext";

export function Resumo() {
  const {data} = useData();

  console.log(data);

  return (
    <h1>Resumo</h1>
  )
}