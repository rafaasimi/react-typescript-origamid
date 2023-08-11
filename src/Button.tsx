// type ButtonProps = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: () => void;
// }>

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string
}

export function Button({ tamanho, children, onClick, ...props }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      style={{fontSize: tamanho}}
      {...props}
    >
      {children}
    </button>
  )
}