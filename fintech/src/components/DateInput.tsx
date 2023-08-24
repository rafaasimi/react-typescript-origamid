type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

export function DateInput({ label, ...props }: IDateInput) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </form>
  );
}
