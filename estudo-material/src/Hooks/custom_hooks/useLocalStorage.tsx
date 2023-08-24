import React from 'react';

const useLocalStorage = (
  key: string,
  inicial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);

    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  // return [state, setState] as const;
  return [state, setState];
};

export default useLocalStorage;
