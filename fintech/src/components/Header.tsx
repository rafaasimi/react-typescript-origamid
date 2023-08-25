import { DateRange } from './DateRange';
import { Months } from './Months';

export function Header() {
  return (
    <header className='mb'>
      <div className='mb'>
        <DateRange />
      </div>
      <Months />
    </header>
  );
}
