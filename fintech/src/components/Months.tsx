import { ButtonMonth } from './ButtonMonth';

export function Months() {
  return (
    <div className='flex'>
      <ButtonMonth n={-3}/>
      <ButtonMonth n={-2}/>
      <ButtonMonth n={-1}/>
      <ButtonMonth n={-0}/>
    </div>
  );
}
