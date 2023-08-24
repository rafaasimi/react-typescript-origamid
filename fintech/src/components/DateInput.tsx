type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

export function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
}
