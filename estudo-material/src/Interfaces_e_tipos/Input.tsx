type InputProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
};

export function Input({ id, label, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...props} />
    </div>
  );
}
