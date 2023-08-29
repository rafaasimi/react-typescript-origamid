import React from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from './DateRange';
import { Months } from './Months';

export function Header() {
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('Resumo');
        document.title = 'Fintech | Resumo'
        break;
      case '/vendas':
        setTitle('Vendas');
        document.title = 'Fintech | Vendas'
        break;
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
}
