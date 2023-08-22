import { useUserContext } from './Context/UserContext';

export function Header() {
  const { data } = useUserContext();

  if (!data) return null;

  return (
    <header>
      <h1>Nome: {data?.nome}</h1>
    </header>
  );
}
