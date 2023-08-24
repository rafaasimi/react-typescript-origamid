import { useData } from "../contexts/DataContext"

export function Header() {
  const {data} = useData();

  console.log(data);
  

  return (
    <h1>Header</h1>
  )
}