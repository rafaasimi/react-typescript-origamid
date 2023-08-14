import { useState } from 'react'

export function Checkbox({label}: {label: string}) {
  const [value, setValue] = useState(false)

  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setValue(event.currentTarget.checked)
  // }

  return (
    <label style={{
      padding: '1rem',
      border: value ? '2px solid #8d2' : '2px solid #f70'
    }}>
      <input type="checkbox" checked={value} onChange={({ currentTarget }) => setValue(currentTarget.checked)}/>
      {label}
    </label>
  )
}