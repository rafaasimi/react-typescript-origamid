import { useData } from "../contexts/DataContext"
import { DateRange } from "./DateRange"

export function Header() {

  return (
    <div>
      <DateRange />
    </div>
  )
}