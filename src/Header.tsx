import { useUI } from './Context/UIContext';

export function Header() {
  const { dark, setDark } = useUI();

  return (
    <header>
      <h1>{dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDark((state) => !state)}>Alterar tema</button>
    </header>
  );
}
