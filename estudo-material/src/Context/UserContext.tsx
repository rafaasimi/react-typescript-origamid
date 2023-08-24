import React from 'react';
import useFetch from '../Hooks/custom_hooks/useFetch';

type IUser = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

type IUserContext = {
  data: IUser | null;
  loading: boolean;
  error: string | null;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (context === null)
    throw new Error('useContext deve estar dentro do Provider.');
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IUser>(
    'https://data.origamid.dev/usuarios/1'
  );

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
