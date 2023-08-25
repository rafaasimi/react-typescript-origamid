import React from 'react';
import { DateInput } from './DateInput';
import { useData } from '../contexts/DataContext';

export function DateRange() {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}
