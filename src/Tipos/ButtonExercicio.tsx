type ButtonExercicioProps = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

export function ButtonExercicio({total, setTotal}: ButtonExercicioProps) {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  )
}