import { useUserContext } from './Context/UserContext';

export function Content() {
  const { data, loading, error } = useUserContext();

  if(loading) return <div>Carregando...</div>
  if (!data) return null;

  return (
    <main>
      <h2>Preferências:</h2>
      <ul>
        <li>Playback: {data?.preferencias.playback}</li>
        <li>Volume: {data?.preferencias.volume}</li>
        <li>Qualidade: {data?.preferencias.qualidade}</li>
      </ul>
    </main>
  );
}
