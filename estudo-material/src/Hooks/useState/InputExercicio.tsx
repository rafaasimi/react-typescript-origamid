type InputProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  setDate: React.Dispatch<React.SetStateAction<string>>
};

export function Input({ id, label, setDate, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...props} onChange={(event) => setDate(event.currentTarget.value)}/>
    </div>
  );
}
