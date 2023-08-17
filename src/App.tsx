import { useEffect, useState } from 'react';
import { Input } from './Hooks/useState/InputExercicio';

type Venda = {
  id: string;
  nome: string;
  status: string;
};

function App() {

  function useEffectCallBack() {
    console.log('Montou');
    return () => {
      console.log('Desmontou');
    }
  }

  useEffect(useEffectCallBack, []);


  // useEffect(() => {
  //   console.log('Montou');
  //   return () => {
  //     console.log('Desmontou');
  //   };
  // }, []);

  return <div>Effect</div>;
}

export default App;
