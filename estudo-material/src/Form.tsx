import React from 'react';
import { Input } from './Interfaces_e_tipos/Input';

type State = {
  nome: string;
  email: string;
};

// type Action = {
//   type: 'setNome' | 'setEmail';
//   payload: string;
// };

type Action =
  | { type: 'setNome'; payload: string }
  | { type: 'setEmail'; payload: string };

// function reducer(state: State, action: Action) {
//   console.log(state);
//   console.log(action);

//   if (action.type === 'setNome') {
//     return {
//       ...state,
//       nome: action.payload,
//     };
//   }

//   if (action.type === 'setEmail') {
//     return {
//       ...state,
//       email: action.payload,
//     };
//   }

//   return state;
// }

function reducer(state: State, action: Action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'setNome':
      return {
        ...state,
        nome: action.payload,
      };
    case 'setEmail':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export function Form() {
  const [state, dispatch] = React.useReducer(reducer, { nome: '', email: '' });

  return (
    <div>
      <Input
        id="nome"
        label={`Nome: ${state.nome}`}
        value={state.nome}
        onChange={({ target }) =>
          dispatch({ type: 'setNome', payload: target.value })
        }
      />
      <Input
        id="email"
        label={`Email: ${state.email}`}
        value={state.email}
        onChange={({ target }) =>
          dispatch({ type: 'setEmail', payload: target.value })
        }
      />
    </div>
  );
}
