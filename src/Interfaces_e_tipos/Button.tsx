// type ButtonProps = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: () => void;
// }>

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string
}

export function Button({ tamanho, children, onClick, ...props }: ButtonProps) {
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX)
  }

  return (
    <button 
      onClick={handleClick} 
      style={{fontSize: tamanho}}
      {...props}
    >
      {children}
    </button>
  )
}