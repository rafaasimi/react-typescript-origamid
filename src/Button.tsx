type ButtonProps = {
  tamanho?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} style={{fontSize: props.tamanho}}>
      {props.children}
    </button>
  )
}