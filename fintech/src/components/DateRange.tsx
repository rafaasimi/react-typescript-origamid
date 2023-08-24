import React from 'react';
import { DateInput } from './DateInput';

export function DateRange() {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Início"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}
