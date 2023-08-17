import React from 'react';
import { UseRefExercicio } from './Hooks/useRef/UseRefExercicio';

type Venda = {
  id: string;
  nome: string;
  status: string;
};

function App() {
  

  return (
    <div>
      <UseRefExercicio />
    </div>
  );
}

export default App;
